import React from "react";
import "./Backdrop.css";
const backdrop = props => (
  <div className="backdrop" onClick={props.click}>
    <br />
  </div>
);

export default backdrop;
