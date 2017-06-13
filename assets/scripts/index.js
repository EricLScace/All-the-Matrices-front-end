'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const matrixGetUI = require('./matrix-get-ui')

$(() => {
  setAPIOrigin(location, config)

  // Insert application heading
  $('.app-title').html('<h1>All the Linotype Matrices</h1>')

  // Load public get-matrix form
  matrixGetUI.loadGetMatrixForm()
})
