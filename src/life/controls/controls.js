import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bool, number, func } from 'prop-types'

import { stepSimulation, startSimulation, stopSimulation, setStepsPerSecond, selectors } from './ducks'
import PatternSelector from './pattern-selector'

class Controls extends Component {
  constructor(props) {
    super(props)

    this.onStepClick = this.onStepClick.bind(this)
    this.onStartClick = this.onStartClick.bind(this)
    this.onStopClick = this.onStopClick.bind(this)
    this.onStepsPerSecondChange = this.onStepsPerSecondChange.bind(this)
  }

  onStepClick() {
    this.props.stepSimulation()
  }

  onStartClick() {
    this.props.startSimulation()
  }

  onStopClick() {
    this.props.stopSimulation()
  }

  onStepsPerSecondChange(e) {
    const parsed = parseInt(parseInt(e.target.value))
    if (!isNaN(parsed) && parsed >= 1) {
      this.props.setStepsPerSecond(parsed)      
    }
  }

  render() {
    const { isRunning, stepsPerSecond } = this.props
    return (
      <Fragment>
        <button onClick={this.onStepClick}>Step</button>
        <label htmlFor='stepsPerSecond'>Steps per Second</label>
        <input type='number' id='stepsPerSecond' name='stepsPerSecond' value={stepsPerSecond} onChange={this.onStepsPerSecondChange} min={1} />
        { isRunning 
          ? <button onClick={this.onStopClick}>Stop</button>
          : <button onClick={this.onStartClick}>Start</button>
        }
        <PatternSelector />
      </Fragment>
    )
  }
}

Controls.propTypes = {
  isRunning: bool.isRequired,
  stepsPerSecond: number.isRequired,
  startSimulation: func.isRequired,
  stopSimulation: func.isRequired,
  stepSimulation: func.isRequired,
  setStepsPerSecond: func.isRequired,
}

const mapStateToProps = state => ({ 
  isRunning: selectors.getIsRunning(state),
  stepsPerSecond: selectors.getStepsPerSecond(state),
})
const mapDispatchToProps = { startSimulation, stopSimulation, stepSimulation, setStepsPerSecond }

export default connect(mapStateToProps, mapDispatchToProps)(Controls)