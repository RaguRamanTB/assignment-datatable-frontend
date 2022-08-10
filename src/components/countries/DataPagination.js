import React from "react";
import { Pagination, Grid } from "@mui/material";
import { connect } from "react-redux";
import { fetchCountries, fetchCountryCount } from "../../actions";

class DataPagination extends React.Component {
  constructor(props) {
    super(props);
    this.handlePaginationChange = this.handlePaginationChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchCountryCount();
  }

  handlePaginationChange = (_event, page) => {
    const { filters } = this.props;
    if (filters) {
      const offset = filters.numOfRowsValue * (page - 1);
      this.props.fetchCountries(filters.numOfRowsValue, offset, filters.sortByValue, filters.orderByValue);
    } else {
      const offset = 5 * (page - 1);
      this.props.fetchCountries(5, offset, "id", "ASC");
    }
  };

  calculatePaginationCount = () => {
    const { count, filters } = this.props;
    if (count) {
      if (filters) {
        return Math.ceil(count / filters.numOfRowsValue);
      }
      return Math.ceil(count / 5);
    }
    return 0;
  };

  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6}>
          <Pagination
            count={this.calculatePaginationCount()}
            variant="outlined"
            color="primary"
            size="large"
            onChange={this.handlePaginationChange}
            showFirstButton
            showLastButton
          />
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.countries.count,
    filters: state.filters.filters,
  };
};

export default connect(mapStateToProps, {
  fetchCountries,
  fetchCountryCount,
})(DataPagination);
