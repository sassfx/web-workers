import { RESET_GRID, UPDATE_GRID, EDIT_GRID_CELL } from './types'

const resetGrid = newGrid => ({
  type: RESET_GRID,
  payload: { newGrid },
})

const updateGrid = updatedGrid => ({
  type: UPDATE_GRID,
  payload: { updatedGrid },
})

const editGridCell = (x, y, value) => ({
  type: EDIT_GRID_CELL,
  payload: { x, y, value },
})

export { resetGrid, updateGrid, editGridCell }