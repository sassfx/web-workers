import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import Life, { reducer } from './life'
import createWorkerMiddleware from './worker-middleware'
import LifeWorker from './life/life.worker'
import { resetGrid } from './life/grid/ducks'
import { create2dArray } from './utils'

const store = createStore(reducer, applyMiddleware(createWorkerMiddleware(new LifeWorker())))

const INITIAL_HEIGHT = 50
const INITIAL_WIDTH = 50
const INITIAL_GRID = create2dArray(INITIAL_HEIGHT, INITIAL_WIDTH)
store.dispatch(resetGrid(INITIAL_GRID))

render(
  <Provider store={store}>
    <Life />
  </Provider>,
  document.getElementById('root')
)