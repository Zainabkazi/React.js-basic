import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="/">log out</a>{" "}
      </li>
      <li>
        <a href="/">About</a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
