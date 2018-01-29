import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.handleClickIncre = this.handleClickIncre.bind(this)
    this.handleClickDecre = this.handleClickDecre.bind(this)

    this.state = {
      // count: this.getOwnState()
      count: this.props.value
    }
  }  

  componentWillMount() {
    console.log('will Mount' + this.props.interval)
  }

  componentDidMount() {
    // store.subscribe(this.onChange)  // 同步store状态
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.value
    })
    console.log('will receive props:' + this.props.interval)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count
  }

  componentWillUpdate() {
    console.log('will update')
  }

  componentDidUpdate() {
    console.log('did update')
  }
  
  componentWillUnmount() {
    console.log('will unmount')
    // store.unsubsbribe(this.onChange)
  }

  // getOwnState() {
  //   return store.getState()[this.props.caption]
  // }

  // onChange() {
  //   this.setState({
  //     count: this.getOwnState()
  //   })
  // }
  
  handleClickIncre() {
    this.props.onIncrement(this.props.caption)  // 改变store状态
  }

  handleClickDecre() {
    this.props.onDecrement(this.props.caption)  // 改变store状态
  }

  render() {
    console.log('render' + this.props.interval)
    return (
      <div>
        <button onClick={this.handleClickIncre}>+</button>
        <button onClick={this.handleClickDecre}>-</button>
        <span>{this.props.caption}: current count: {this.state.count}</span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: PropTypes.string,
  interval: PropTypes.number
}

Counter.defaultProps = {
  caption: '',
  interval: 5
}

export default Counter