'use strict'
// Contains all calls to the authentication API.
// See wiki for API call formats
const config = require('./config')

// Invokes sign-in API to log in user
const logIn = function (credentials) {
  // Duplicate password to meet API demand for password_confirmation
  credentials.password_confirmation = credentials.password
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: credentials
  })
}

// Invokes sign-up API to register a new user
const register = function (credentials) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: credentials
  })
}

module.exports = {
  logIn,
  register
}
