'use strict'
// UX for user registration.
const announceUI = require('./announce-ui.js')
const authnAPI = require('./authn-api')
const getFormFields = require('../../lib/get-form-fields')
const matrixGetUI = require('./matrix-get-ui')
const msg = require('./messages.js')
const logInForm = require('../templates/logInForm.handlebars')
const store = require('./store')
const userRegisterUI = require('./user-register-ui')

const logInFailure = function (response) {
  return
}

const logInSuccess = function (response) {
  // Load logged-in name/org, settings, log-out and pwd-change buttons
  store.user.setLogInStatus(true,
    response.user.email,
    response.user.id,
    response.user.name,
    response.user.organization)
  announceUI.clear('announcement') // Clears announcement area.
  matrixGetUI.loadGetMatrixForm() // Loads matrix area
  // Load response area with logged-in user info
}

// Log-in submit button clicked
const onLogIn = function (e) {
  e.preventDefault()
  // Clear old error messages, if any.
  announceUI.post(msg.loggingIn, 'announcement')
  const credentials = getFormFields(e.target)
  // Cache credentials & launch API request
  store.user.setLogInStatus(null, credentials.email, credentials.password)
  authnAPI.login(credentials)
  .then(logInSuccess)
  .catch(logInFailure)
}

// Clicked the Log-in button
const onLogInClick = function () {
  // Clear announcement, response & matrix areas.
  announceUI.clear('all')
  $('#authn').html(logInForm)
  $('#log-in').on('submit', onLogIn)
  $('#register').on('click', userRegisterUI.onRegisterClick)
}

module.exports = {
  onLogInClick
}
