import React from "react";

class Pagination extends React.Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <nav
            className="pagination is-centered is-rounded"
            role="navigation"
            aria-label="pagination"
            style={{
              padding: "5px",
              border: "1px solid #FFFFFF",
            }}
          >
            <a className="pagination-previous">&lt;&lt; First</a>
            <a className="pagination-previous">&lt; Previous</a>
            <a className="pagination-next">Next &gt;</a>
            <a className="pagination-next">Last &gt;&gt;</a>
            <ul className="pagination-list">
              <li>
                <a className="pagination-link" aria-label="Goto page 1">
                  1
                </a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 45">
                  45
                </a>
              </li>
              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 46"
                  aria-current="page"
                >
                  46
                </a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 47">
                  47
                </a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 86">
                  86
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Pagination;
