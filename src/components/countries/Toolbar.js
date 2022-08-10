import React from "react";
import { connect } from "react-redux";
import { fetchCountries, updateFilters } from "../../actions";

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfRowsValue: "5",
      searchValue: "",
      sortByValue: "id",
      orderByValue: "ASC",
    };
    this.handleNumOfRowsChange = this.handleNumOfRowsChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleOrderByChange = this.handleOrderByChange.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (
      this.state.numOfRowsValue !== prevState.numOfRowsValue ||
      this.state.searchValue !== prevState.searchValue ||
      this.state.sortByValue !== prevState.sortByValue ||
      this.state.orderByValue !== prevState.orderByValue
    ) {
      const filters = {
        numOfRowsValue: this.state.numOfRowsValue,
        searchValue: this.state.searchValue,
        sortByValue: this.state.sortByValue,
        orderByValue: this.state.orderByValue,
      };
      this.props.updateFilters(filters);
      if (this.props.currentPage) {
        let offset = (this.props.currentPage - 1) * this.state.numOfRowsValue;
        if (offset > this.props.count) {
          offset = 0;
        }
        this.props.fetchCountries(
          this.state.numOfRowsValue,
          offset,
          this.state.sortByValue,
          this.state.orderByValue
        );
      } else {
        this.props.fetchCountries(
          this.state.numOfRowsValue,
          0,
          this.state.sortByValue,
          this.state.orderByValue
        );
      }
    }
  }

  handleNumOfRowsChange = (event) => {
    this.setState({
      numOfRowsValue: event.target.value,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleSortByChange = (event) => {
    this.setState({
      sortByValue: event.target.value,
    });
  };

  handleOrderByChange = (event) => {
    this.setState({
      orderByValue: event.target.value,
    });
  };

  render() {
    return (
      <div
        style={{
          padding: "5px",
          marginBottom: "10px",
          border: "2px solid #FFFFFF",
        }}
      >
        <div className="columns is-vcentered">
          <div className="column is-half">
            <div className="columns is-vcentered is-gapless">
              <div className="column is-1 has-text-right has-text-weight-semibold">
                Show
              </div>
              <div className="column is-2 has-text-centered">
                <div className="control">
                  <div className="select">
                    <select
                      id="numOfRowsInput"
                      value={this.state.numOfRowsValue}
                      onChange={this.handleNumOfRowsChange}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column is-1 has-text-weight-semibold">rows</div>
            </div>
          </div>
          <div className="column">
            <div className="columns is-vcentered">
              <div className="column is-three-fifths">
                <div className="control">
                  <input
                    id="searchInput"
                    className="input"
                    type="text"
                    placeholder="Search"
                    value={this.state.searchValue}
                    onChange={this.handleSearchChange}
                  />
                </div>
              </div>
              <div className="column">
                <div className="control">
                  <div className="select">
                    <select
                      id="sortByInput"
                      value={this.state.sortByValue}
                      onChange={this.handleSortByChange}
                    >
                      <option value="id">ID</option>
                      <option value="name">Country Name</option>
                      <option value="capital">Capital</option>
                      <option value="population">Population</option>
                      <option value="timezone">Timezone</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="control">
                  <div className="select">
                    <select
                      id="orderByInput"
                      value={this.state.orderByValue}
                      onChange={this.handleOrderByChange}
                    >
                      <option value="ASC">ASC</option>
                      <option value="DESC">DESC</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
    filters: state.filters.filters,
    currentPage: state.filters.currentPage,
    count: state.countries.count,
  };
};

export default connect(mapStateToProps, {
  fetchCountries,
  updateFilters,
})(Toolbar);
