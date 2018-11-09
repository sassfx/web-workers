import { STEP_SIMULATION, START_SIMULATION, STOP_SIMULATION, SET_STEPS_PER_SECOND } from './controls/ducks'
import { updateGrid, selectors } from './grid/ducks'
import { advanceStateOneStep } from './state-calculator'

class LifeWorker {
  constructor() {
    this.grid = null
    this.stepsPerSecond = 1
    this.intervalId = null

    this.stepSimulation = this.stepSimulation.bind(this)
    this.startSimulation = this.startSimulation.bind(this)
    this.stopSimulation = this.stopSimulation.bind(this)
    this.setStepsPerSecond = this.setStepsPerSecond.bind(this)
    this.updateGrid = this.updateGrid.bind(this)
  }

  stepSimulation() {
    if (this.grid) {
      this.grid = advanceStateOneStep(this.grid)
      postMessage(updateGrid(this.grid))      
    }
  }

  startSimulation() {
    if (!this.intervalId) {
      const interval = 1000 / this.stepsPerSecond
      this.intervalId = setInterval(this.stepSimulation, interval)
    }
  }

  stopSimulation() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  setStepsPerSecond(state, { stepsPerSecond }) {
    this.stepsPerSecond = stepsPerSecond
    if (this.intervalId) {
      this.stopSimulation()      
      this.startSimulation()
    }
  }

  updateGrid(state) { // TODO add selector
    this.grid = selectors.getGrid(state)
  }
}

const lifeWorker = new LifeWorker()
const actionMethods = {
  [STEP_SIMULATION]: lifeWorker.stepSimulation,
  [START_SIMULATION]: lifeWorker.startSimulation,
  [STOP_SIMULATION]: lifeWorker.stopSimulation,
  [SET_STEPS_PER_SECOND]: lifeWorker.setStepsPerSecond,
}
const getMethodForAction = type => actionMethods[type] ? actionMethods[type] : lifeWorker.updateGrid

onmessage = e => {
  const { state, action: { type, payload } } = e.data
  getMethodForAction(type)(state, payload)
}