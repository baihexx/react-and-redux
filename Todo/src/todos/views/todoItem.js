import React, { Component } from 'react'
// 从react 15.5起 PropTypes 就被移除了，要从prop-types库引入
import PropTypes from 'prop-types'
import './styles.css'

class TodoItem extends Component {
  render() {
    return (
      <li>
        <input type='checkbox' onClick={this.props.toggleTodo}/>
        <label className={this.props.completed ? 'completed' : 'uncompleted'}>{this.props.text}</label>
        <button onClick={this.props.removeTodo} className='remove-btn'>x</button>
      </li>
    )
  }
}

// PropTypes 8种常用类型： string, number, object, array, func, bool, node, element
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  toggleTodo: PropTypes.func,
  removeTodo: PropTypes.func
}

export default TodoItem