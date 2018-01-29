import React, { Component } from 'react'
import Counter from '../containers/counter'
import store from '../store'

class ControlPanel extends Component {
  constructor(props) {
    super(props)

    this.forceRepaint = this.forceRepaint.bind(this)
    this.getOwnState = this.getOwnState.bind(this)

    this.state = {
      sum: 0
    }
  }

  componentDidMount() {
    store.subscribe(this.getOwnState)
  }

  componentWillUnmount() {
    store.unsubscribe(this.getOwnState)
  }

  getOwnState() {
    const state = store.getState()
    let sum = 0
    Object.keys(state).forEach(key => {
      sum += state[key]
    })
    this.setState({
      sum
    })
  }

  forceRepaint() {
    this.forceUpdate()
  }

  updateSum(val) {
    this.setState({
      sum: this.state.sum + val
    })
  }

  render() {
    console.log('panel render')
    return (
      <div>
        <Counter caption={'First'} interval={1}></Counter>
        <Counter caption={'Second'} interval={2}></Counter>
        <Counter caption={'Third'} interval={3}></Counter>
        <div>Sum: {this.state.sum}</div>
        <button onClick={this.forceRepaint}>click me to force repaint</button>
      </div>
    )
  }
}

export default ControlPanel
