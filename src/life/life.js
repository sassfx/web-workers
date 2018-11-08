import React, { Fragment } from 'react'
import { number } from 'prop-types'
import { connect } from 'react-redux'

import Grid, { selectors } from './grid'
import Controls from './controls'

const Life = ({ generation }) => 
  <Fragment>
    <div>
      <Grid />
    </div>
    <div>
      <Controls />
      <span> Generation: {generation}</span>
    </div>
  </Fragment>

Life.propTypes = {
  generation: number.isRequired,
}

const mapStateToProps = state => ({
  generation: selectors.getGeneration(state),
})

export default connect(mapStateToProps)(Life)