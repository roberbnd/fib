import React, { Component } from 'react'
import axios from 'axios'

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ''
  }
  componentDidMount() {
    this.fetchValues()
    this.fetchIndexes()
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current')
    this.setState({ values: values.data })
  }

  async fetchIndexes() {
    const values = await axios.get('/api/values/all')
    this.setState({
      seenIndexes: seenIndexes.data
    })
  }

  renderSeenIdexes() {
    return this.state.seenIndexes
  }

  render() {
    return (
      <div>
        <form>
          <label>Enter your index:</label>
          <input type="text" value="Submit" />
          <button>Submit</button>
        </form>

      <h3>Indexs I have seen:</h3>
      { this.rederSeenIndexes() }
      <h3>Calculated values:</h3>
      </div>
    )
  }
}

export default Fib;
