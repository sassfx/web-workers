import { RESET_GRID, UPDATE_GRID } from './types'

import LifePattern from '../rle-life-pattern'

const gliderGun = new LifePattern(36, 9, `24bo$22bobo$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o$2o8bo3bob2o4b
obo$10bo5bo7bo$11bo3bo$12b2o!`)
const gliderTrain = new LifePattern(68, 33, `32b2o$31b2o$33bo17b6o6b2o$50bo5bo4bo4bo$56bo10bo$26b5o19bo4bo5bo5bo$
25bo4bo21b2o8b6o$30bo$18b2o5bo3bo23bo$18b2o7bo24bobo$14b3o4bo29bo5bo$
13bob2o5b2o11b2o15bobobobo6bo$b2o9b2obobo3b2o11bo2bo13b2o2bo3bo5b2o$o
2bo9b6o9b2o4bobo7b2o5b2o3b2obo4bob2o$b2o11b4o10b2o5bo8b2o7bo5bo4bobo$
50bobo11b2o2$50bobo11b2o$b2o11b4o10b2o5bo8b2o7bo5bo4bobo$o2bo9b6o9b2o
4bobo7b2o5b2o3b2obo4bob2o$b2o9b2obobo3b2o11bo2bo13b2o2bo3bo5b2o$13bob
2o5b2o11b2o15bobobobo6bo$14b3o4bo29bo5bo$18b2o7bo24bobo$18b2o5bo3bo23b
o$30bo$25bo4bo21b2o8b6o$26b5o19bo4bo5bo5bo$56bo10bo$50bo5bo4bo4bo$33bo
17b6o6b2o$31b2o$32b2o!`)

const create2dArray = (width, height) => Array.apply(null, new Array(height)).map(() => Array.apply(null, new Array(width)).map(() => 0)) //Math.round(Math.random())

const merge2dArrays = (first, second) => {
  second.forEach((row, j) => {
    row.forEach((value, i) => {
      first[j][i] = value
    })
  })

  return first
}

const INITIAL_STATE = merge2dArrays(create2dArray(500, 500), gliderTrain.decode())

const updaters = {
  [UPDATE_GRID]: payload => payload.updatedGrid
}

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  const updater = updaters[type]
  if (updater) {
    return updater(payload)
  }

  return state
}

export default reducer