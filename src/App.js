import React, { Component } from "react"
import Button from "./Button"
import fetchApi from "./fetchApi"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      data: null
    }
  }

  fetchRandomJoke() {
    this.setState({ loading: true })
    fetchApi().then(data => {
      this.setState({ data, loading: false })
    })
  }

  componentDidMount() {
    this.fetchRandomJoke()
  }

  render() {
    const { data, loading } = this.state
    return (
      <div className="App">
        <h1>Chuck Norris Random Joke App</h1>
        <h3>{data && data.value}</h3>
        <Button loading={loading} handleClick={() => this.fetchRandomJoke()} />
      </div>
    )
  }
}

export default App
