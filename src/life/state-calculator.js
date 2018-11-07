const advanceStateOneStep = state => state.map(
  (row, j) => row.map(
    (value, i) => {
      const neighbours = calculateNeighbours(state, i, j)
      return value 
        ? neighbours < 2 || neighbours > 3 ? 0 : 1
        : neighbours === 3 ? 1 : 0
    }
  )
)

const calculateNeighbours = (state, i, j) => {
  return getValueAtPosition(state, i - 1, j - 1) + getValueAtPosition(state, i, j - 1) + getValueAtPosition(state, i + 1, j - 1) +
    getValueAtPosition(state, i - 1, j) + getValueAtPosition(state, i + 1, j) +
    getValueAtPosition(state, i - 1, j + 1) + getValueAtPosition(state, i, j + 1) + getValueAtPosition(state, i + 1, j + 1)
}

const getValueAtPosition = (state, i, j) => {
  const row = state[j]
  return row ? row[i] || 0 : 0
}

export { advanceStateOneStep }