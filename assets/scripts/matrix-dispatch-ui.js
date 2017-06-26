'use strict'
// Dispatcher for events in the matrix sections of the DOM.
const getMatrix = require('./matrix-get-ui')
const getMatrixTemplate = require('../templates/getMatrix.handlebars')
const matrixOwn = require('./matrix-own-ui')

// Initialize matrix section of DOM
// Invoked by index.js at page load.
const initUI = function () {
  // Load get-matrix form
  $('#matrix-request').html(getMatrixTemplate())
  // Add delegating click dispatcher to this section of DOM
  $('#matrix').on('click', onClick)
}

const onClick = function (e) {
  e.preventDefault()
  switch (e.target.id) {
    case 'matrix-request':
      getMatrix.onRequest(e)
      break
    case 'update-sets-submit':
      matrixOwn.onUpdate(e)
  }
}

module.exports = { initUI }
