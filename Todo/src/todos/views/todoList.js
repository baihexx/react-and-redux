import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import { FilterTypes } from '../../constant';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(item => (
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

const setVislbleTodos = (todos, filter) => {
  if (filter === FilterTypes.COMPLETED) {
    return todos.filter(item => {
      return item.completed
    })
  } else if (filter === FilterTypes.UNCOMPLETED) {
    return todos.filter(item => {
      return !item.completed
    })
  } else {
    return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: setVislbleTodos(state.todos, state.filter),
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
