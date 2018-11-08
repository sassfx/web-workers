import { STEP_SIMULATION, START_SIMULATION, STOP_SIMULATION } from './controls/ducks'
import { updateGrid } from './grid/ducks'
import { advanceStateOneStep } from './state-calculator'

class LifeWorker {
  constructor() {
    this.grid = null
    this.intervalId = ''

    this.stepSimulation = this.stepSimulation.bind(this)
    this.startSimulation = this.startSimulation.bind(this)
    this.stopSimulation = this.stopSimulation.bind(this)
    this.updateGrid = this.updateGrid.bind(this)
  }

  stepSimulation() {
    if (this.grid) {
      this.grid = advanceStateOneStep(this.grid)
      postMessage(updateGrid(this.grid))      
    }
  }

  startSimulation() {
    this.intervalId = setInterval(this.stepSimulation, 200)
  }

  stopSimulation() {
    clearInterval(this.intervalId)
  }

  updateGrid({ grid }) { // TODO add selector
    this.grid = grid
  }
}

const lifeWorker = new LifeWorker()
const actionMethods = {
  [STEP_SIMULATION]: lifeWorker.stepSimulation,
  [START_SIMULATION]: lifeWorker.startSimulation,
  [STOP_SIMULATION]: lifeWorker.stopSimulation,
}
const getMethodForAction = type => actionMethods[type] ? actionMethods[type] : lifeWorker.updateGrid

onmessage = e => {
  const { state, action: { type } } = e.data
  getMethodForAction(type)(state)
}