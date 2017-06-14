'use strict'
// Contains all calls to the authentication API.
// See wiki for API call formats
const config = require('./config')

// Invokes sign-up API to register a new player
const register = function (credentials) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: credentials
  })
}

module.exports = {
  register
}
