#!/usr/bin/env node
'use strict'
const letenv = require('./')

if (2 === process.argv.length) {
  letenv()
}
else {
  letenv().then(() => {
    const foreground = require('foreground-child')
    foreground(process.argv[2], process.argv.slice(3))
  })
}
