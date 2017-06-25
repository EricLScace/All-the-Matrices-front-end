'use strict'
// UX for settings changes.
const announceUI = require('./announce-ui.js')
// const authnAPI = require('./authn-api')
// const getFormFields = require('../../lib/get-form-fields')
const msg = require('./messages.js')
const changeSettings = require('../templates/changeSettings.handlebars')
// const store = require('./store')

// Extracts fields buried inside the registration form object
// const extractFormFields = function (APIObject, user) {
//   user.email = APIObject.credentials.email
//   user.password = APIObject.credentials.password
//   user.passwordConfirmation = APIObject.credentials.password_confirmation
//   user.name = APIObject.credentials.name
//   user.organization = APIObject.credentials.organization
// }
//
// const failure = function (response) {
//   if (response.responseText.includes('has already been taken')) {
//     // Presence of email object indicates duplicate email registration
//     announceUI.post(msg.alreadyRegistered, 'announcement')
//     // Try logging in
//   } else {
//     announceUI.post(msg.registrationFailed, 'announcement')
//   }
// }
//
// // Submitted the register form
// const onSubmit = function (e) {
//   e.preventDefault()
//   // Clear old error messages, if any.
//   announceUI.clear('announcement')
//   // Get the form's contents
//   const credentialsAPIObject = getFormFields(e.target.form)
//   // The API object is inconveniently structured; place contents in user.
//   extractFormFields(credentialsAPIObject, store.user)
//   // Validate essential credentials present in acceptable format
//   // If ok, start registration over the API.
//   // Otherwise wait for user to correct & resubmit form (or do something else)
//   if (validateCredentials(store.user)) {
//     // Heroku can be slow; indicate registering.
//     announceUI.post(msg.registering)
//     authnAPI.register(credentialsAPIObject)
//       .then(success)
//       .catch(failure)
//   }
// }

// Clicked the Settings icon
const onRequest = function () {
  // Clear announcement, response & matrix areas.
  announceUI.clear('all')
  // Display settings change form
  $('#authn').html(changeSettings)
  announceUI.post(msg.userInfo, 'logged-in-user')
  // Hide the settings icon but keep the space reserved on the screen
  $('#change-settings-request').css('visibility', 'hidden')
}

// const success = function (response) {
//   announceUI.post(msg.registeredOK, 'announcement')
// }
//
// const validateCredentials = function (user) {
//   let ok = true
//   // Return true if all validated, else display message & return false.
//   if (user.email === '') {
//     announceUI.append(msg.noEmail)
//     ok = false
//   }
//   if (user.password === '' || user.passwordConfirmation === '') {
//     announceUI.append(msg.noPassword)
//     ok = false
//   } else {
//     if (user.password !== user.passwordConfirmation) {
//       announceUI.append(msg.unequalPassword)
//       ok = false
//     }
//   }
//   return ok
// }

module.exports = {
  // onSubmit,
  onRequest
}
