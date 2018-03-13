import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import { FilterTypes } from '../../constant';

class TodoList extends Component {
  render() {
    let todos = this.props.todos.slice(0)
    if (this.props.filter === FilterTypes.COMPLETED) {
      todos = todos.filter(item => {
        return item.completed
      })
    } else if (this.props.filter === FilterTypes.UNCOMPLETED) {
      todos = todos.filter(item => {
        return !item.completed
      })
    }
    return (
      <ul>
        {
          todos.map(item => (
            <TodoItem key={item.id}
              text={item.text}
              completed={item.completed}
              toggleTodo={() => { this.props.onToggleTodo(item.id) }}
              removeTodo={() => { this.props.onRemoveTodo(item.id) }}
            />
          ))
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

// export default TodoList

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: id => dispatch(toggleTodo(id)),
    onRemoveTodo: id => dispatch(removeTodo(id))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TodoList)
