import { UPDATE_GRID, UPDATE_GRID_CELL } from './types'
import createReducer from '../../../create-reducer'
import { clone2dArray } from '../../../utils'

const updaters = {
  [UPDATE_GRID]: ({ updatedGrid }) => updatedGrid,
  //[RESET_GRID]: () => INITIAL_GRID,
  [UPDATE_GRID_CELL]: ({ x, y, value }, grid) => {
    const updatedGrid = clone2dArray(grid)
    updatedGrid[y][x] = value
    return updatedGrid
  }
}

export default createReducer([[0]], updaters)