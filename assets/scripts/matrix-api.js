'use strict'
// API calls on /matrix
const config = require('./config')
const matrixAPIversion = '1.0'
const store = require('./store')

const show = function (matrix) {
  matrix.symbol = 'Δ'
  // Is user logged in?
  if (store.user.isLoggedIn) {
    // Yes. Submit request with token.
    return $.ajax({
      url: config.apiOrigin + '/matrix',
      method: 'GET',
      headers: {
        'Authorization': 'Token token=' + store.user.authNToken
      },
      data: {
        'version': matrixAPIversion,
        'matrix': matrix
      }
    })
  } else {
    return $.ajax({
      url: config.apiOrigin + '/matrix',
      method: 'GET',
      data: {
        'version': matrixAPIversion,
        'matrix': matrix
      }
    })
  }
}

// UPDATE
// Submit request with token.

module.exports = {show}
