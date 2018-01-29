/**
 * 根据state，action计算新的state
 */

import * as actionTypes from '../actions/actionTypes'

const reducers = (state, action) => {
  if (action.type === actionTypes.INCREMENT) {
    return { ...state, [action.caption]: state[action.caption] + 1 }
  } else if (action.type === actionTypes.DECREMENT) {
    return { ...state, [action.caption]: state[action.caption] - 1 }
  } else {
    return state
  }
}

export default reducers