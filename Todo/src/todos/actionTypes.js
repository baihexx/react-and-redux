// action.js要用action type生成action； reducer要根据action type 对state做对应的修改，so 提取出来，单独存放
// 命名方式导出，引入方式 import { TODO_ADD } from '...'
export const TODO_ADD = 'ADD_TODO'
export const TODO_TOGGLE = 'TODO_TOGGLE'
export const TODO_REMOVE = 'TODO_REMOVE'