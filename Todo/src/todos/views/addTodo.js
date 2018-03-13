import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault() // 阻止表单提交的默认行为：网页跳转

    const value = this.state.value.trim()
    if (value) {
      this.props.onAdd(value)
    }

    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.value} onChange={this.onChange}/>
          <button type='submit'>添加</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: text => dispatch(addTodo(text))
  }
}

export default connect(
  null, mapDispatchToProps
)(AddTodo)

// export default AddTodo