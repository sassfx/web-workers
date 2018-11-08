import { combineReducers } from 'redux'

import createReducer from '../../../create-reducer'
import { START_SIMULATION, STOP_SIMULATION } from './types'

const updaters = {
  [START_SIMULATION]: () => true,
  [STOP_SIMULATION]: () => false,
}

export default combineReducers({ running: createReducer(false, updaters) })