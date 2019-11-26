const path = require('path')

module.exports = {
  process (filename) {
    const assetFilename = JSON.stringify(path.basename(filename))
    return `module.exports = ${assetFilename};`
  }
}
