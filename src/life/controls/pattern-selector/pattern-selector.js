import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'

import { patterns, createEmptyGridWithPattern } from './patterns'
import { resetGrid } from '../../grid/ducks'

const patternMap = patterns.reduce((acc, curr) => ({ ...acc, [curr.name]: curr}), {})

class PatternSelector extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const pattern = patternMap[e.target.value]
    if (pattern) {
      const newGrid = createEmptyGridWithPattern(pattern)
      this.props.resetGrid(newGrid)
    }
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option>None</option>
        {patterns.map(pattern => <option key={pattern.name} value={pattern.name}>{pattern.name}</option>)}
      </select>
    )
  }
}

PatternSelector.propTypes = {
  resetGrid: func.isRequired,
}

const mapDisptchToProps = { resetGrid }

export default connect(null, mapDisptchToProps)(PatternSelector)