import React from "react";
import "./DataTable.css";

class DataTable extends React.Component {
  render() {
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
          <tr>
            <td>1</td>
            <td>India</td>
            <td>Delhi</td>
            <td>55</td>
            <td>UTC+05:30</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default DataTable;
