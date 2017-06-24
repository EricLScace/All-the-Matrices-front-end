'use strict'

const authnDispatchUI = require('./authn-dispatch-ui')
const config = require('./config')
const matrixGetUI = require('./matrix-get-ui')
const setAPIOrigin = require('../../lib/set-api-origin')
const store = require('./store')
const User = require('./user')

$(() => {
  setAPIOrigin(location, config)
  // Instantiate a new User in store (there should not be one).
  if (!store.User) store.user = new User()
  // Insert application heading
  // Done after the basic DOM loads to avoid jumping around on the screen at page load.
  $('#app-title').html('<h1>All the Linotype Matrices</h1>')
  authnDispatchUI.initUI()
  matrixGetUI.loadGetMatrixForm()
})
