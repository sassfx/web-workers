import { combineReducers } from 'redux'
import { UPDATE_GRID, RESET_GRID, EDIT_GRID_CELL } from './types'
import createReducer from '../../../create-reducer'
import { clone2dArray } from '../../../utils'

const gridUpdaters = {
  [UPDATE_GRID]: ({ updatedGrid }) => updatedGrid,
  [RESET_GRID]: ({ newGrid }) => newGrid,
  [EDIT_GRID_CELL]: ({ x, y, value }, grid) => {
    const updatedGrid = clone2dArray(grid)
    updatedGrid[y][x] = value
    return updatedGrid
  }
}

const gridReducer = createReducer([[0]], gridUpdaters)

const generationUpdaters = {
  [UPDATE_GRID]: (payload, generation) => generation + 1,
  [RESET_GRID]: () => 0,
}

const generationReducer = createReducer(0, generationUpdaters)

export default combineReducers({ current: gridReducer, generation: generationReducer })