import React, { Component } from 'react'
import { connect } from 'react-redux'
import { number, func, arrayOf } from 'prop-types'
import { editGridCell, selectors } from './ducks'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()

    this.renderCanvas = this.renderCanvas.bind(this)
    this.onGridClick = this.onGridClick.bind(this)
  }

  componentDidMount() {
    this.renderCanvas()
  }

  componentDidUpdate() {
    this.renderCanvas()    
  }

  renderCanvas() {
    const canvas = this.canvasRef.current
    if (canvas) {
      const { grid, height, width } = this.props

      const yMax = grid.length
      const xMax = grid[0].length
      const xStep = width / xMax
      const yStep = height / yMax

      
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#a3a9b7'
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      grid.forEach((row, j) => {
        row.forEach((value, i) => {
          if (value) {
            ctx.fillRect(i * xStep, j * yStep, xStep, yStep)
          }
        })
      })

      ctx.beginPath()
      for (let j = 0; j <= yMax; j++) {
        ctx.moveTo(0, j * yStep)
        ctx.lineTo(xMax * xStep, j * yStep)
      }

      for (let i = 0; i <= xMax; i++) {
        ctx.moveTo(i * xStep, 0)
        ctx.lineTo(i * xStep, yMax * yStep)
      }

      ctx.strokeStyle = '#a8abaf'
      ctx.stroke()
    }
  }

  onGridClick(e) {
    const { grid, height, width, editGridCell } = this.props
    const yMax = grid.length
    const xMax = grid[0].length
    const xStep = width / xMax
    const yStep = height / yMax

    const { offsetX, offsetY } = e.nativeEvent
    const x = Math.floor(offsetX / xStep)
    const y = Math.floor(offsetY / yStep)

    const newValue = grid[y][x] ? 0 : 1
    editGridCell(x, y, newValue)
  }

  render() {
    const { height, width } = this.props
    return <canvas ref={this.canvasRef} onClick={this.onGridClick} width={height} height={width} />
  }
}

Grid.propTypes = {
  height: number.isRequired,
  width: number.isRequired,
  grid: arrayOf(arrayOf(number)).isRequired,
  editGridCell: func.isRequired,
}

Grid.defaultProps = {
  height: 800,
  width: 800,
}

const mapStateToProps = state => ({
  grid: selectors.getGrid(state),
})

const mapDispatchToProps = { editGridCell }

export default connect(mapStateToProps, mapDispatchToProps)(Grid)