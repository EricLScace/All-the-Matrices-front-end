'use strict'

// Define User constructor
const User = function (isLoggedIn, email, password, id, authNToken, name, org) {
  this.setLogInStatus(isLoggedIn, email, password, id, authNToken, name, org)
}

User.prototype.setLogInStatus = function (isLoggedIn, email, password, id, authNToken, name, org) {
  // note: email & password are used as login credentials.
  // This function is both constructor and a public method.
  // Three forms of this function:
  // _setLogInStatus(true, …) to record a log-in & returns true.
  // _setLogInStatus(false) logs out the player; returns false
  // _setLogInStatus(null, email, password) to cache a name and
  //    password (received as strID).
  //    Used if we want to re-authenticate user in the immediate future; e.g.,
  //    to log a new user in after he was successfully registered.
  switch (isLoggedIn) {
    case true:
      // Accept proffered credentials as logged in.
      this._isLoggedIn = true
      this.id = id
      this.authNToken = authNToken
      this.name = name
      this.org = org
      return true
    case null:
      // Cache proffered email & password for future use
      this._isLoggedIn = null
      this.email = email
      this._password = password
      return null
    default:
      // Log out a player by changing _isLoggedIn and erasing credentials.
      this._isLoggedIn = false
      this.email = ''
      this.id = ''
      this.authNToken = ''
      this._password = ''
      return false
  }
}

module.exports = User
