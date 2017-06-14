'use strict'
// UX for user registration.
const announceUI = require('./announce-ui.js')
const authnAPI = require('./authn-api')
const getFormFields = require('../../lib/get-form-fields')
const msg = require('./messages.js')
const registerForm = require('../templates/registerForm.handlebars')
const store = require('./store')

// Clicked the Register button
const onLogInClick = function () {
  // Clear announcement, response & matrix areas.
  announceUI.clear('all')
  $('#authn').html(registerForm)
  $('#register').on('submit', onRegister)
  // function call to add above plus log-in click handler
}
module.exports = {
  onLogInClick
}
