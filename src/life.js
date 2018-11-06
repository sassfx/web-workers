const rules = [
  { applies: (value, neighbours) => value && neighbours < 2, newValue: 0 },
  { applies: (value, neighbours) => value && (neighbours === 2 || neighbours === 3), newValue: 1 },
  { applies: (value, neighbours) => value && neighbours > 3, newValue: 0 },
  { applies: (value, neighbours) => !value && neighbours === 2, newValue: 1 },
]

const advanceStateOneStep = state => state.map(
  (row, j) => row.map(
    (value, i) => {
      const rule = rules.find(x => x.applies(value, calculateNeighbours(state, i, j)))
      return rule || value
    }
  )
)

const calculateNeighbours = (state, i, j) => {
  return getValueAtPosition(state, i - 1, j - 1) + getValueAtPosition(state, i, j - 1) + getValueAtPosition(state, i + 1, j - 1) +
    getValueAtPosition(state, i - 1, j) + getValueAtPosition(state, i, j) + getValueAtPosition(state, i + 1, j) +
    getValueAtPosition(state, i - 1, j + 1) + getValueAtPosition(state, i, j + 1) + getValueAtPosition(state, i + 1, j + 1)
}

const getValueAtPosition = (state, i, j) => {
  const row = state[j]
  if (row) {
    return row[i] || 0
  }
}

export default advanceStateOneStep