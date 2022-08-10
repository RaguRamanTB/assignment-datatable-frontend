import React from "react";
import DataTable from "./countries/DataTable";
import DataPagination from "./countries/DataPagination";
import Toolbar from "./countries/Toolbar";

const App = () => {
  return (
    <div style={{ margin: "10px 15px" }}>
      <Toolbar />
      <DataTable />
      <DataPagination />
    </div>
  );
};

export default App;
