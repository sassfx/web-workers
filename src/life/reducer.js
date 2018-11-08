import { combineReducers } from 'redux'
import { reducer as grid } from './grid'
import { reducer as controls } from './controls'

export default combineReducers({ grid, controls })