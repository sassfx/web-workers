import { STEP_SIMULATION, START_SIMULATION, STOP_SIMULATION, SET_STEPS_PER_SECOND } from './types'
import { stepSimulation, startSimulation, stopSimulation, setStepsPerSecond } from './actions'
import selectors from './selectors'
import reducer from './reducer'

export {
  reducer as default,
  selectors,
  stepSimulation,
  startSimulation,
  stopSimulation,
  setStepsPerSecond,
  STEP_SIMULATION,
  START_SIMULATION,
  STOP_SIMULATION,
  SET_STEPS_PER_SECOND,
}