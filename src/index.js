import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import Worker from './life.worker'
import Grid from './grid'
import reducer, { updateGrid } from './ducks'

const store = createStore(combineReducers({ grid: reducer }))

const worker = new Worker()
worker.onmessage = event => store.dispatch(updateGrid(event.data))
worker.postMessage({ grid: store.getState().grid })

const App = () => 
<div>
  <Grid />
</div>

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)