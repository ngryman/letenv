const fs = require('fs')

module.exports = function lenv() {
  return new Promise((resolve, reject) => {
    fs.readFile('.env', 'utf8', (err, content) => {
      if (err) reject(err)
      if (content) {
        content.split('\n').forEach(line => {
          const [ key, value ] = line.split('=')
          process.env[key] = value
        })
      }
      resolve()
    })
  })
}
