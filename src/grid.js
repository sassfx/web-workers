import React, { Component } from 'react'
import { connect } from 'react-redux'

const STEP = 5

class Grid extends React.Component {
  componentDidMount() {
    this.renderCanvas()
  }

  componentDidUpdate() {
    this.renderCanvas()    
  }

  renderCanvas() {
    const { grid } = this.props
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    grid.forEach((row, j) => {
      row.forEach((value, i) => {
        if (value) {
          ctx.fillRect(i * STEP, j * STEP, STEP, STEP)
        }
      })
    })
  }

  render() {
    const { grid } = this.props
    const height = grid.length * STEP
    const width = grid[0].length * STEP
    return <canvas ref='canvas' width={width} height={height} />
  }
}

const mapStateToProps = state => ({
  grid: state.grid,
})

export default connect(mapStateToProps)(Grid)