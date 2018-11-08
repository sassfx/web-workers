const regex = /(?<count>\d*)(?<value>b|o|\$|!)/g

export default class RleLifePattern {
  constructor(name, width, height, pattern) {
    this.name = name
    this.width = width
    this.height = height
    this.pattern = pattern
  }

  _decode() {
    const parts = this.pattern.split('$')
    return parts.map(part => {
      let match
      let row = []
      do {
        match = regex.exec(part)
        if (match) {
          const { count: countString, value: valueString } = match.groups
          const count = countString ? parseInt(countString) : 1
          const value = valueString === 'o' ? 1 : 0
          const rowPart = Array.apply(null, new Array(count)).map(() => value)
          row = row.concat(rowPart)
        }
      } while (match)
      
      if (row.length < this.width) {
        const rowPart = Array.apply(null, new Array(this.width - row.length)).map(() => 0)
        row = row.concat(rowPart)
      }

      regex.lastIndex = 0 // reset the regex object

      return row
    })
  }


  decode() {
    let match
    let pattern = []
    let row = []
    do {
      match = regex.exec(this.pattern)
      if (match) {
        const { count: countString, value: valueString } = match.groups
        const count = countString ? parseInt(countString) : 1

        if (valueString === '$' || valueString === '!') {
          for (let rowCount = 0; rowCount < count; rowCount ++) {
            if (row.length < this.width) {
              const rowPart = Array.apply(null, new Array(this.width - row.length)).map(() => 0)
              row = row.concat(rowPart)
            }
            pattern.push(row)
            row = []
          }
        }
        else {
          const value = valueString === 'o' ? 1 : 0
          const rowPart = Array.apply(null, new Array(count)).map(() => value)
          row = row.concat(rowPart)
        }
      }
    } while (match)

    return pattern
  }
} 