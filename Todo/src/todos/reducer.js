import { TODO_ADD, TODO_TOGGLE, TODO_REMOVE } from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case TODO_ADD: 
      return [...state, { id: action.id, text: action.text, completed: false }]
    case TODO_TOGGLE:
      return state.map(item => {
        if (item.id === action.id) {
          item.completed = !item.completed
        }
        return item
      })
    case TODO_REMOVE:
      return state.filter(item => {
        return item.id !== action.id
      })
    default:
      return state
  }
}