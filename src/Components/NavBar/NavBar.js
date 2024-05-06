import React from "react";
import "./nav.css";
function NavBar() {
  return (
    <div>
      <div className="item_nav_bar">
        <div>
        <h1 className="logo">
            <i>FitFlow</i>
          </h1>
        </div>
        <div className="navitem">
          <div>
            <h3
              onClick={() => (window.location.href = "/")}
              className="item_nav"
            >
              Workout Status
            </h3>
          </div>
          <div>
            <h3
              onClick={() => (window.location.href = "/addworkout")}
              className="item_nav"
            >
              Add Workout Status
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
