import { UPDATE_GRID, UPDATE_GRID_CELL } from './types'
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

const reducer = (state = [[0]], { type, payload }) => {
  const updater = updaters[type]
  if (updater) {
    return updater(payload, state)
  }

  return state
}

export default reducer