import { STEP_SIMULATION, START_SIMULATION, STOP_SIMULATION, SET_STEPS_PER_SECOND } from './types'

const stepSimulation = () => ({
  type: STEP_SIMULATION,
})

const startSimulation = () => ({
  type: START_SIMULATION,
})

const stopSimulation = () => ({
  type: STOP_SIMULATION,
})

const setStepsPerSecond = stepsPerSecond => ({
  type: SET_STEPS_PER_SECOND,
  payload: { stepsPerSecond },  
})

export { stepSimulation, startSimulation, stopSimulation, setStepsPerSecond }