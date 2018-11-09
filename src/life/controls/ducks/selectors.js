const getStepsPerSecond = state => state.controls.stepsPerSecond
const getIsRunning = state => state.controls.isRunning

const selectors = {
  getStepsPerSecond,
  getIsRunning,
}

export default selectors