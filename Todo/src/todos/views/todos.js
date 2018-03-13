import React from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'

// 无状态的函数组件
export default () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  )
}