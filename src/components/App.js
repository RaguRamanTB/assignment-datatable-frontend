import React from "react";
import DataTable from "./countries/DataTable";
import Pagination from "./countries/Pagination";
import Toolbar from "./countries/Toolbar";

const App = () => {
  return (
    <div style={{ margin: "10px 15px" }}>
      <Toolbar />
      <DataTable />
      <Pagination />
    </div>
  );
};

export default App;
