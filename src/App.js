import React, { Component } from "react";
import fetchApi from "./fetchApi";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: null
    };
  }

  fetchRandomJoke() {
    this.setState({ loading: true });
    fetchApi().then(data => {
      this.setState({ data, loading: false });
    });
  }

  componentDidMount() {
    this.fetchRandomJoke();
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div className="App">
        <h1>Chuck Norris Random Joke App</h1>
        <h3>{data && data.value}</h3>
        <button disabled={loading} onClick={() => this.fetchRandomJoke()}>
          {loading ? "Loading..." : "Fetch Another One!"}
        </button>
      </div>
    );
  }
}

export default App;
