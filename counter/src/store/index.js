/**
 * createStore
 */

import { createStore } from 'redux'
import reducers from '../reducers'

const initState = {
  'First': 0,
  'Second': 0,
  'Third': 0
}
const store = createStore(reducers, initState)

export default store