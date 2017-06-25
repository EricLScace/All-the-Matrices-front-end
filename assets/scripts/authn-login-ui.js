'use strict'
// UX for user registration.

const announceUI = require('./announce-ui')
const authnAPI = require('./authn-api')
const getFormFields = require('../../lib/get-form-fields')
const matrixGetUI = require('./matrix-get-ui')
const msg = require('./messages.js')
const loggedInForm = require('../templates/loggedInForm.handlebars')
const loginForm = require('../templates/loginForm.handlebars')
const store = require('./store')

const failure = function (response) {
  // if statusText = 'Unauthorized', inform user of bad email/password.
  if (response.statusText.includes('Unauthorized')) {
    announceUI.post(msg.badEmailPassword, 'announcement')
  }
}

const success = function (response) {
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

// Clicked the Log-in button
const onRequest = function () {
  // Clear announcement, response & matrix areas.
  announceUI.clear('all')
  $('#authn').html(loginForm)
}

// Clicked log-in form submit button
const onSubmit = function (e) {
  e.preventDefault()
  // Clear old error messages, if any.
  announceUI.post(msg.loggingIn, 'announcement')
  const credentials = getFormFields(e.target.form)
  // Cache credentials & launch API request
  store.user.setLogInStatus(null, credentials.email, credentials.password)
  authnAPI.logIn(credentials)
  .then(success)
  .catch(failure)
}

module.exports = {
  onRequest,
  onSubmit
}
