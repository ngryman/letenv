'use strict'
const fs = require('fs')

module.exports = function lenv() {
  return new Promise((resolve, reject) => {
    fs.readFile('.env', 'utf8', (err, content) => {
      if (content) {
        content.split('\n').forEach(line => {
          const variable = line.split('=')
          process.env[variable[0]] = variable[1]
        })
      }
      resolve()
    })
  })
}
