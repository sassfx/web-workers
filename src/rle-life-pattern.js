const regex = /(?<count>\d*)(?<value>b|o)/g

export default class RleLifePattern {
  constructor(x, y, pattern) {
    this.x = x
    this.y = y
    this.pattern = pattern
  }

  decode() {
    const parts = this.pattern.split('$')
    return parts.map(part => {
      let match;
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
      
      if (row.length < this.x) {
        const rowPart = Array.apply(null, new Array(this.x - row.length)).map(() => 0)
        row = row.concat(rowPart)
      }

      regex.lastIndex = 0 // reset the regex object

      return row
    })
  }
} 