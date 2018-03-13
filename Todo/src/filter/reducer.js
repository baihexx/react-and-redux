import { FILTER_SET } from './actionTypes'
import { FilterTypes } from '../constant'

export default (state = FilterTypes.ALL, action) => {
  switch(action.type) {
    case FILTER_SET:
      return action.filter
    default:
      return state
  }
}