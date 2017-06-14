'use strict'
// UX for user registration.
const announceUI = require('./announce-ui.js')
const getFormFields = require('../../lib/get-form-fields')
const logInRegisterButtons = require('../templates/logInRegisterButtons.handlebars')
const msg = require('./messages.js')
const registerForm = require('../templates/registerForm.handlebars')
const store = require('./store')

// Log-in & register buttons
const loadLogInRegisterButtons = function () {
  $('#authn').html(logInRegisterButtons())
  // $('#log-in').on('click', onLogInClick)
  $('#register').on('click', onRegisterClick)
}

// Submitted the register form
const onRegister = function (e) {
  e.preventDefault()
  // Clear any previous error messages
  announceUI.clear('announcement')
  const credentials = getFormFields(e.target)
  if (validateCredentials(credentials)) {
    // Cache credentials & launch API request
    store.user.setLogInStatus(null, credentials.email, credentials.password, null, null, credentials.name, credentials.org)
  }
}

// Clicked the Register button
const onRegisterClick = function () {
  // Clear announcement, response & matrix areas.
  announceUI.clear('response')
  announceUI.clear('matrix')
  announceUI.clear('announcement')
  $('#authn').html(registerForm)
  $('#register').on('submit', onRegister)
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
  loadLogInRegisterButtons
}
