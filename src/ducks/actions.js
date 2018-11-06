import { RESET_GRID, UPDATE_GRID } from './types'

const resetGrid = () => ({
  type: RESET_GRID,
})

const updateGrid = updatedGrid => ({
  type: UPDATE_GRID,
  payload: { updatedGrid },
})

export { resetGrid, updateGrid }