'use strict'
// UX for user registration.
const announceUI = require('./announce-ui.js')
const authnAPI = require('./authn-api')
const getFormFields = require('../../lib/get-form-fields')
const logInRegisterButtons = require('../templates/logInRegisterButtons.handlebars')
const msg = require('./messages.js')
const registerForm = require('../templates/registerForm.handlebars')
const store = require('./store')
const authnLoginUI = require('./authn-login-ui')

// Log-in & register buttons
const loadLogInRegisterButtons = function () {
  $('#authn').html(logInRegisterButtons())
  // $('#log-in').on('click', onLogInClick)
  $('#register').on('click', onRegisterClick)
  $('#log-in').on('click', authnLoginUI.onLogInClick)
}

// Submitted the register form
const onRegister = function (e) {
  e.preventDefault()
  // Clear old error messages, if any.
  announceUI.clear('announcement')
  const credentials = getFormFields(e.target)
  if (validateCredentials(credentials)) {
    // Heroku can be slow; indicate registering.
    announceUI.post(msg.registering)
    // Cache credentials & launch API request
    store.user.setLogInStatus(null, credentials.email, credentials.password, null, null, credentials.name, credentials.org)
    authnAPI.register(credentials)
      .then(registerSuccess)
      .catch(registerFailure)
  }
}

// Clicked the Register button
const onRequest = function () {
  // Clear announcement, response & matrix areas.
  announceUI.clear('all')
  $('#authn').html(registerForm)
}

const registerFailure = function (response) {
  if (response.responseText.email === 'has already been taken') {
    announceUI.post(msg.alreadyRegistered, 'announcement')
    // Try logging in
  } else {
    announceUI.post(msg.registrationFailed, 'announcement')
  }
}

const registerSuccess = function (response) {
  announceUI.post(msg.registeredOK, 'announcement')
}

const validateCredentials = function (credentials) {
  // Return true if all validated, else display message & return false.
  if (credentials.email) {
    announceUI.append(msg.noEmail)
    return false
  }
  if (credentials.password || credentials.password_confirmation) {
    announceUI.append(msg.noPassword)
    return false
  }
  if (credentials.password !== credentials.password_confirmation) {
    announceUI.append(msg.unequalPassword)
    return false
  }
  return true
}

module.exports = {
  loadLogInRegisterButtons,
  onRequest
}
