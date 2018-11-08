import { create2dArray } from '../../../../utils'

const createEmptyGridWithPattern = (pattern, width, height) => {
  const calculatedWidth = width || pattern.width + 10
  const calculatedHeight = height || pattern.height + 10

  const actualWidth = Math.max(calculatedWidth, calculatedHeight, 50)
  const actualHeight = actualWidth

  const newGrid = create2dArray(actualWidth, actualHeight)
  
  const xOffset = Math.floor((actualWidth - pattern.width) / 2)
  const yOffset = Math.floor((actualHeight - pattern.height) / 2)

  const patternGrid = pattern.decode()

  patternGrid.forEach((row, j) => {
    row.forEach((value, i) => {
      newGrid[j + yOffset][i + xOffset] = value
    })
  })

  return newGrid
}

export { createEmptyGridWithPattern }