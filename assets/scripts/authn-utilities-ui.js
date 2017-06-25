'use strict'
// Short utility functions used by other authn-UI modules.
const announceUI = require('./announce-ui')
const loggedInForm = require('../templates/loggedInForm.handlebars')
const matrixGetUI = require('./matrix-get-ui')
const msg = require('./messages.js')

// Display logged-in condition & matrix submit form
const postLoggedInUserWorkingView = function () {
  $('#authn').html(loggedInForm) // Load authn area.
  announceUI.post(msg.userInfo, 'logged-in-user') // Add user name
  matrixGetUI.loadGetMatrixForm() // Loads matrix area
}

// Examines proposed password & passwordConfirmation in store.user
// Tests for presence & suitability
// Return true if all tests passed; else display user message(s) & return false.
const validateProposedPassword = function (user) {
  let isPasswordOK = true
  // Both fields must be present
  if (user.password === '' ||
      user.password === undefined ||
      user.passwordConfirmation === '' ||
      user.passwordConfirmation === undefined) {
    announceUI.append(msg.noPassword)
    isPasswordOK = false
  } else {
    // Both fields must be equal
    if (user.password !== user.passwordConfirmation) {
      announceUI.append(msg.unequalPassword)
      isPasswordOK = false
    }
  }
  return isPasswordOK
}

module.exports = {
  postLoggedInUserWorkingView,
  validateProposedPassword
}
