'use strict'
// UX for user registration.
const announceUI = require('./announce-ui.js')
const authnAPI = require('./authn-api')
const getFormFields = require('../../lib/get-form-fields')
const msg = require('./messages.js')
const logInForm = require('../templates/logInForm.handlebars')
const store = require('./store')

// Clicked the Register button
const onLogInClick = function () {
  // Clear announcement, response & matrix areas.
  announceUI.clear('all')
  $('#authn').html(logInForm)
  // $('#log-in').on('submit', onLogIn)
  // function call to add above plus register click handler
}
module.exports = {
  onLogInClick
}
