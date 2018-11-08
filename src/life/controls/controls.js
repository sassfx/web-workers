import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import { stepSimulation, startSimulation, stopSimulation } from './ducks'

class Controls extends Component {
  constructor(props) {
    super(props)

    this.onStepClick = this.onStepClick.bind(this)
    this.onStartClick = this.onStartClick.bind(this)
    this.onStopClick = this.onStopClick.bind(this)
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

  render() {
    return (
      <Fragment>
        <button onClick={this.onStepClick}>Step</button>
        <button onClick={this.onStartClick}>Start</button>
        <button onClick={this.onStopClick}>Stop</button>
      </Fragment>
    )
  }
}

Controls.propTypes = {
  startSimulation: func.isRequired,
  stopSimulation: func.isRequired,
  stepSimulation: func.isRequired,
}

const mapDispatchToProps = { startSimulation, stopSimulation, stepSimulation }

export default connect(null, mapDispatchToProps)(Controls)