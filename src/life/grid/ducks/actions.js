import { RESET_GRID, UPDATE_GRID, UPDATE_GRID_CELL } from './types'

const resetGrid = () => ({
  type: RESET_GRID,
})

const updateGrid = updatedGrid => ({
  type: UPDATE_GRID,
  payload: { updatedGrid },
})

const updateGridCell = (x, y, value) => ({
  type: UPDATE_GRID_CELL,
  payload: { x, y, value },
})

export { resetGrid, updateGrid, updateGridCell }