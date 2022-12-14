import React from "react";
import { connect } from "react-redux";
import { fetchCountries } from "../../actions";
import "./DataTable.css";

class DataTable extends React.Component {
  componentDidMount() {
    this.props.fetchCountries(5, 0, "id", "ASC");
  }

  renderRow = (country) => {
    const { id, name, capital, population, timezone } = country;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{capital}</td>
        <td>{population}</td>
        <td>{timezone}</td>
      </tr>
    );
  };

  render() {
    const { countries, filteredCountries } = this.props;
    if (countries) {
      let countryEntries = [];
      if (filteredCountries) {
        countryEntries = filteredCountries;
      } else {
        countryEntries = countries;
      }
      return (
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Country Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Timezone</th>
            </tr>
          </thead>
          <tbody>
            {countryEntries.map((country) => {
              return this.renderRow(country);
            })}
          </tbody>
        </table>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
    filteredCountries: state.countries.filteredCountries,
  };
};

export default connect(mapStateToProps, {
  fetchCountries,
})(DataTable);
