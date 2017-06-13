'use strict'
// API calls on /matrix
const config = require('./config')
const matrixAPIversion = '1.0'

const show = function (matrix) {
  // Is user logged in?
    // No. Submit request without token.
    // Yes. Submit request with token.
  matrix.symbol = 'Δ'
  return $.ajax({
    url: config.apiOrigin + '/matrix',
    method: 'GET',
    data: {
      'version': matrixAPIversion,
      'matrix': matrix
    }
  })
}

// UPDATE
// Submit request with token.

module.exports = {show}
