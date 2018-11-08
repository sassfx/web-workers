const createReducer = (initialState, updaters) => 
  (state = initialState, { type, payload }) => {
    const updater = updaters[type]
    if (updater) {
      return updater(payload, state)
    }

    return state
  }

export default createReducer