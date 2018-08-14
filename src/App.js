import React, { Component } from "react";
import BeerTable from "./BeerTable";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    fetch("https://api.hops.watch/v1/menu")
      .then(res => res.json())
      .then(beers => this.setState({ beers }))
      .catch(err => this.setState({ beers: data }));
  }
  render() {
    return <BeerTable beers={this.state.beers} />;
  }
}

export default App;
