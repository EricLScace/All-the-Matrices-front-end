'use strict'
// UX for user registration.
const announceUI = require('./announce-ui.js')
const authnAPI = require('./authn-api')
const getFormFields = require('../../lib/get-form-fields')
const matrixGetUI = require('./matrix-get-ui')
const msg = require('./messages.js')
const loggedInForm = require('../templates/loggedInForm.handlebars')
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
    null,
    response.user.id,
    response.user.token,
    response.user.name,
    response.user.organization)
  announceUI.clear('announcement') // Clears announcement area.
  $('#authn').html(loggedInForm) // Load authn area.
  announceUI.post(msg.userInfo, 'logged-in-user')
  // attach event handlers to buttons
  matrixGetUI.loadGetMatrixForm() // Loads matrix area
}

// Log-in submit button clicked
const onLogIn = function (e) {
  e.preventDefault()
  // Clear old error messages, if any.
  announceUI.post(msg.loggingIn, 'announcement')
  const credentials = getFormFields(e.target)
  // Cache credentials & launch API request
  store.user.setLogInStatus(null, credentials.email, credentials.password)
  authnAPI.logIn(credentials)
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
  onLogInClick,
  logInSuccess,
  logInFailure
}
