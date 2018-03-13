import { TODO_ADD, TODO_TOGGLE, TODO_REMOVE } from './actionTypes'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: TODO_ADD,
  id: nextTodoId++,
  text,
  completed: false
})

export const toggleTodo = (id) => ({
  type: TODO_TOGGLE,
  id
})

export const removeTodo = (id) => ({
  type: TODO_REMOVE,
  id
})