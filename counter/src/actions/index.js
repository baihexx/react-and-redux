/**
 * 生成action对象
 */
import * as actionTypes from './actionTypes'

export const increment = (payload) => {
  return {
    type: actionTypes.INCREMENT,
    caption: payload
  }
}

export const decrement = (payload) => {
  return {
    type: actionTypes.DECREMENT,
    caption: payload
  }
}