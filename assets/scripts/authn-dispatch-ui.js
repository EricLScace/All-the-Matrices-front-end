'use strict'
// Dispatcher for events in the authn authentication section of the DOM.

const logInRegisterButtons = require('../templates/logInRegisterButtons.handlebars')

// Module with log-in authentication logic
// const authnLogInUI = require('./authn-login-ui')

// Module with registration logic
// const authnRegisterUI = require('./authn-register-ui')

// Other similar modules; e.g., to change password/settings.

// Initialized  authentication section of DOM
// Invoked by index.js at page load.
const initUI = function () {
  // Load the register & log-in buttons into DOM
  $('#authn').html(logInRegisterButtons())
  // Add delegating click dispatcher to this section of DOM
  $('#authn').on('click', onClick)
}

// Dispatch clicks
const onClick = function (e) {
  e.preventDefault()
  // switch (e.target.id) {
  //   case 'log-in':
  //     authnLogInUI.onClick()
  //     break
  //   case 'register':
  //     authnRegisterUI.onClick()
  //     break
  //   case 'register-submit':
  //     authnRegisterUI.onRegister(e)
  // }
}

module.exports = { initUI }
