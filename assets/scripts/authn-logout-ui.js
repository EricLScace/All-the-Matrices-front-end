'use strict'
// UX for user log-out.

const announceUI = require('./announce-ui')
// const authnAPI = require('./authn-api')
const msg = require('./messages')

// const failure = function (response) {
//   return
// }
//
// const success = function (response) {
//   // Load logged-in name/org, settings, log-out and pwd-change buttons
//   store.user.setLogInStatus(true,
//     response.user.email,
//     null,
//     response.user.id,
//     response.user.token,
//     response.user.name,
//     response.user.organization)
//   announceUI.clear('announcement') // Clears announcement area.
//   $('#authn').html(loggedInForm) // Load authn area.
//   announceUI.post(msg.userInfo, 'logged-in-user')
//   // attach event handlers to buttons
//   matrixGetUI.loadGetMatrixForm() // Loads matrix area
// }

// Clicked the Log-in button
const onRequest = function () {
  // Tell user he is being logged out.
  announceUI.post(msg.loggingOut, 'announcement')
}

module.exports = {
  onRequest
}
