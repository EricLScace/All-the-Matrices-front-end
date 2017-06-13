'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const matrixGetUI = require('./matrix-get-ui')
const store = require('./store')
const User = require('./user')

$(() => {
  setAPIOrigin(location, config)
  // Instantiate a new User in store (there should not be one).
  if (!store.Player) store.User = new User()
  // Insert application heading
  $('#app-title').html('<h1>All the Linotype Matrices</h1>')
  // Load public get-matrix form
  matrixGetUI.loadGetMatrixForm()
})
