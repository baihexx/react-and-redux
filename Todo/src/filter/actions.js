import { FILTER_SET } from './actionTypes'

export const setFilter = (filterType) => {
  return {
    type: FILTER_SET,
    filter: filterType
  }
}