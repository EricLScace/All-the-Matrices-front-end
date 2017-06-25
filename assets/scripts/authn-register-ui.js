'use strict'
// UX for user registration.
const announceUI = require('./announce-ui.js')
const authnAPI = require('./authn-api')
const getFormFields = require('../../lib/get-form-fields')
const msg = require('./messages.js')
const registerForm = require('../templates/registerForm.handlebars')
const store = require('./store')

const failure = function (response) {
  if (response.responseText.includes('has already been taken')) {
    // Presence of email object indicates duplicate email registration
    announceUI.post(msg.alreadyRegistered, 'announcement')
    // Try logging in
  } else {
    announceUI.post(msg.registrationFailed, 'announcement')
  }
}

// Submitted the register form
const onSubmit = function (e) {
  e.preventDefault()
  // Clear old error messages, if any.
  announceUI.clear('announcement')
  const credentials = getFormFields(e.target.form)
  if (validateCredentials(credentials)) {
    // Heroku can be slow; indicate registering.
    announceUI.post(msg.registering)
    // Cache credentials & launch API request
    store.user.setLogInStatus(null, credentials.email, credentials.password, null, null, credentials.name, credentials.org)
    authnAPI.register(credentials)
      .then(success)
      .catch(failure)
  }
}

// Clicked the Register button
const onRequest = function () {
  // Clear announcement, response & matrix areas.
  announceUI.clear('all')
  $('#authn').html(registerForm)
  // Hide the register button but keep the space reserved on the screen
  $('#register-request').css('visibility', 'hidden')

}

const success = function (response) {
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
  onSubmit,
  onRequest
}
