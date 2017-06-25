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
  if (isLoggedIn) {
    // Accept proffered credentials as logged in.
    this.isLoggedIn = true
    this.email = email
    this.id = id
    this.authNToken = authNToken
    this.name = name
    this.org = org
    // remove cached password information
    this.password = undefined
    this.passwordConfirmation = undefined
    return true
  } else {
    // Log out a player by changing isLoggedIn and erasing credentials.
    this.isLoggedIn = false
    this.email = undefined
    this.id = undefined
    this.authNToken = ''
    this.password = undefined
    this.passwordConfirmation = undefined
    return false
  }
}

module.exports = User
