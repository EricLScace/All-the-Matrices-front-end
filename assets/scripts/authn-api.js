'use strict'
// Contains all calls to the authentication API.
// See wiki for API call formats
const config = require('./config')

// Invokes sign-in API to log in user
const logIn = function (creds) {
  // Duplicate password to meet API demand for password_confirmation
  // Remove submit: key:value pair
  const credentials = {
    email: creds.email,
    password: creds.password,
    password_confirmation: creds.password
  }
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: {credentials: credentials}
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
