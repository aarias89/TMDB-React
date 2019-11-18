import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  handleChange = e => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchMovie(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div id="search-bar">
        Search Title:
        <form id="custom-search-input" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.value}
            id="search"
            type="search"
            placeholder="Search Movies"
            name="value"
          />
        </form>
      </div>
    );
  }
}
