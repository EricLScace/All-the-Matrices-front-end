'use strict'
// Short utility functions used by other authn-UI modules.
const announceUI = require('./announce-ui')
const loggedInForm = require('../templates/loggedInForm.handlebars')
const matrixGetUI = require('./matrix-get-ui')
const msg = require('./messages.js')

const postLoggedInUserWorkingView = function () {
  $('#authn').html(loggedInForm) // Load authn area.
  announceUI.post(msg.userInfo, 'logged-in-user') // Add user name
  matrixGetUI.loadGetMatrixForm() // Loads matrix area
}

module.exports = {
  postLoggedInUserWorkingView
}
