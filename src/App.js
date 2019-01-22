import React, { Component } from "react";
import Toolbar from "./things/Toolbar/Toolbar";
import SideDrawer from "./things/SideDrawer/SideDrawer";
import Backdrop from "./things/Backdrop/Backdrop";
import Autotext from "./things/Autotext";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",

      gender: "",
      designation: "",
      sideDrawerOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen === true) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <main style={{ marginTop: "20px", height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

        {sideDrawer}
        {backdrop}

        <form className="todo-list">
          <label>Username: </label>
          <input
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
            placeholder="User Name"
          />
          <br />
          <label>password: </label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <br />

          <select
            value={this.state.designation}
            name="designation"
            onChange={this.handleChange}
          >
            <option value="">-- Please Choose a designation --</option>
            <option value="agent">Agent</option>
            <option value="community leader">Community Leader</option>
            <option value="software engineer">Software Engineer</option>
            <option value="research analyst">Research Analyst</option>
          </select>
          <br />

          <button>login</button>
          <br />
          <p>Auto-correcting text-box</p>
          <Autotext />
        </form>
      </main>
    );
  }
}

export default App;
