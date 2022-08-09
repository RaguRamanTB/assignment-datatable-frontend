import React from "react";

class Toolbar extends React.Component {
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
                    <select>
                      <option>5</option>
                      <option>10</option>
                      <option>20</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column is-1 has-text-weight-semibold">
                rows
              </div>
            </div>
          </div>
          <div className="column">
            <div className="columns is-vcentered">
              <div className="column is-three-fifths">
                <div className="control">
                  <input className="input" type="text" placeholder="Search" />
                </div>
              </div>
              <div className="column">
                <div className="control">
                  <div className="select">
                    <select>
                      <option>ID</option>
                      <option>Country Name</option>
                      <option>Capital</option>
                      <option>Population</option>
                      <option>Timezone</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="control">
                  <div className="select">
                    <select>
                      <option>ASC</option>
                      <option>DESC</option>
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

export default Toolbar;
