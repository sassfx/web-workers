const create2dArray = (width, height, valueFunction = () => 0) => Array.apply(null, new Array(height)).map(() => Array.apply(null, new Array(width)).map(valueFunction))

const clone2dArray = matrix => matrix.map(row => Array.from(row))

const merge2dArrays = (first, second) => {
  second.forEach((row, j) => {
    row.forEach((value, i) => {
      first[j][i] = value
    })
  })

  return first
}

export { create2dArray, merge2dArrays, clone2dArray }