import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bool, func } from 'prop-types'

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
        { this.props.running 
          ? <button onClick={this.onStopClick}>Stop</button>
          : <button onClick={this.onStartClick}>Start</button>
        }
      </Fragment>
    )
  }
}

Controls.propTypes = {
  running: bool.isRequired,
  startSimulation: func.isRequired,
  stopSimulation: func.isRequired,
  stepSimulation: func.isRequired,
}

const mapStateToProps = state => ({ running: state.controls.running })
const mapDispatchToProps = { startSimulation, stopSimulation, stepSimulation }

export default connect(mapStateToProps, mapDispatchToProps)(Controls)