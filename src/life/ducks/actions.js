import { STEP_SIMULATION, START_SIMULATION, STOP_SIMULATION } from './types'

const stepSimulation = () => ({
  type: STEP_SIMULATION,
})

const startSimulation = () => ({
  type: START_SIMULATION,
})

const stopSimulation = () => ({
  type: STOP_SIMULATION,
})

export { stepSimulation, startSimulation, stopSimulation }