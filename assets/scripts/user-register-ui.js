'use strict'
// UX for user registration.
const logInRegisterButtons = require('../templates/logInRegisterButtons.handlebars')

// Log-in & register buttons
const loadLogInRegisterButtons = function () {
  $('#authn').html(logInRegisterButtons())
  // $('#sign-in').on('submit', onLogIn)
  // $('#sign-up').on('submit', onSignUp)
  // // Add click handler to remove old announcements
  // $('#player').on('click', onClickClearAnnouncement)
}

module.exports = {
  loadLogInRegisterButtons
}
