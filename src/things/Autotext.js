import React, { Component } from "react";
import Autocomplete from "./Autocomplete";
import "./Autotext.css";

class autotext extends Component {
  constructor() {
    super();
    this.state = {
      DicData: []
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
    )
      .then(res => res.json())
      .then(json => {
        let data = [];
        for (let i in json) {
          data.push(i);
        }
        this.setState({ DicData: data });
      });
  }

  render() {
    return <Autocomplete suggestions={this.state.DicData} />;
  }
}

export default autotext;
