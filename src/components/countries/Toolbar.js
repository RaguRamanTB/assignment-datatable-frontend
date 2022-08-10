import React from "react";
import { connect } from "react-redux";
import {
  fetchCountries,
  updateFilters,
  updateFilteredCountries,
} from "../../actions";

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfRowsValue: "5",
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
      this.state.sortByValue !== prevState.sortByValue ||
      this.state.orderByValue !== prevState.orderByValue
    ) {
      const filters = {
        numOfRowsValue: this.state.numOfRowsValue,
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

  isValidSearchString = (searchArray) => {
    const columnNames = ["id", "country", "capital", "population", "timezone"];
    const operationTypes = ["lt", "gt", "eq", "regex"];
    if (searchArray.length === 2) {
      return columnNames.includes(searchArray[0]) && searchArray[1] !== "";
    } else if (searchArray.length === 3) {
      return (
        columnNames.includes(searchArray[0]) &&
        operationTypes.includes(searchArray[1]) &&
        searchArray[2] !== ""
      );
    }
    return false;
  };

  parseSearchString = (searchValue) => {
    let dotIdx = searchValue.indexOf(".");
    let colonIdx = searchValue.indexOf(":");
    let column, operation, value;
    let result = {
      values: [],
      type: 0,
    };
    if (dotIdx !== -1 && colonIdx !== -1) {
      column = searchValue.slice(0, dotIdx);
      operation = searchValue.slice(dotIdx + 1, colonIdx);
      value = searchValue.slice(colonIdx + 1);
      result.values.push(column);
      result.values.push(operation);
      result.values.push(value);
      result.type = 1;
    } else if (colonIdx > dotIdx) {
      column = searchValue.slice(0, colonIdx);
      value = searchValue.slice(colonIdx + 1);
      result.values.push(column);
      result.values.push(value);
      result.type = 2;
    }
    return result;
  };

  filterCountriesUsingSearch = (result) => {
    const columnMap = {
      id: "id",
      country: "name",
      capital: "capital",
      timezone: "timezone",
      population: "population",
    };
    const { countries } = this.props;
    let filteredCountries = [];
    if (result.type === 1) {
      const columnName = columnMap[result.values[0]];
      const operation = result.values[1];
      const value = result.values[2];
      switch (operation) {
        case "lt":
          filteredCountries = countries.filter((country) => {
            return country[columnName] < parseInt(value);
          });
          break;

        case "gt":
          filteredCountries = countries.filter((country) => {
            return country[columnName] > parseInt(value);
          });
          break;

        case "eq":
          filteredCountries = countries.filter((country) => {
            return country[columnName] === parseInt(value);
          });
          break;

        case "regex":
          filteredCountries = countries.filter((country) => {
            let regExp = new RegExp(value);
            return regExp.test(country[columnName]);
          });
          break;

        default:
          filteredCountries = countries;
          break;
      }
    } else if (result.type === 2) {
      const columnName = columnMap[result.values[0]];
      const value = result.values[1];
      filteredCountries = countries.filter((country) => {
        // eslint-disable-next-line eqeqeq
        return country[columnName] == value;
      });
    }
    if (filteredCountries.length > 0) {
      this.props.updateFilteredCountries(filteredCountries);
    }
  };

  handleSearchChange = (event) => {
    if (event.target.value !== "") {
      const result = this.parseSearchString(event.target.value);
      if (result.values.length > 1) {
        const isValid = this.isValidSearchString(result.values);
        if (isValid) {
          this.filterCountriesUsingSearch(result);
        }
      }
    } else {
      this.props.updateFilteredCountries(null);
    }
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
  updateFilteredCountries,
})(Toolbar);
