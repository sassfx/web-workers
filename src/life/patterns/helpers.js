import { create2dArray } from '../../utils'

const createEmptyGridWithPattern = (grid, pattern) => {
  const width = grid[0].length
  const height = grid.length

  if (width < pattern.width || height < pattern.width) {
    throw new Error('Grid is too small for pattern')
  }

  const newGrid = create2dArray(width, height)
  
  const xOffset = Math.floor((width - pattern.width) / 2)
  const yOffset = Math.floor((height - pattern.height) / 2)

  const patternGrid = pattern.decode()

  patternGrid.forEach((row, j) => {
    row.forEach((i, value) => {
      newGrid[j + yOffset][i + xOffset] = value
    })
  })

  return newGrid
}

export { createEmptyGridWithPattern }