import { combineReducers } from 'redux'

import createReducer from '../../../create-reducer'
import { START_SIMULATION, STOP_SIMULATION, SET_STEPS_PER_SECOND } from './types'

const runningUpdaters = {
  [START_SIMULATION]: () => true,
  [STOP_SIMULATION]: () => false,
}

const stepsPerSecondUpdaters = {
  [SET_STEPS_PER_SECOND]: ({ stepsPerSecond }) => stepsPerSecond,
}

export default combineReducers({ isRunning: createReducer(false, runningUpdaters), stepsPerSecond: createReducer(1, stepsPerSecondUpdaters) })