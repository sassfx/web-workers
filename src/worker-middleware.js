const createWorkerMiddleware = worker => store => {
  worker.onmessage = event => store.dispatch(event.data)
  return next => action => {
    const result = next(action)
    worker.postMessage({ state: store.getState(), action })
    return result
  }
}

export default createWorkerMiddleware