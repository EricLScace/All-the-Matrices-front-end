'use strict'
const store = require('./store')

// messages in English for now
const alreadyRegistered = 'This email address is already registered. Attempting to log you in…'
const andWord = 'and '
const badEmailPassword = 'This email or password was not recognized. Please try again, or re-register.'
const loginFailUnknownCause = 'Sorry! Logging in failed mysteriously ☹️ — try again, or try later.'
const loggingIn = 'Logging you in…'
const loggingOut = 'Logging you out…'
const loginToOwn = 'Logged-in users may register the number of sets of this matrix they own.'
const noPrefixSuffix = 'Please enter both the suffix & prefix codes from the matrix.'
const noEmail = 'Please enter your email address.'
const noPassword = 'Please enter your password twice identically.'
const notInDatabase = 'Code not yet in this database (or was never manufactured).'
const otherServerError = 'Database not available. Please try again later.'
const ownerMsg = function (matrixInfo) {
  matrixInfo.owner = (matrixInfo.owner === '') ? 'User' : matrixInfo.owner
  switch (matrixInfo.quantity) {
    case null:
      return 'You have not registered any sets of this matrix.'
    case '0':
      return 'You have not registered any sets of this matrix.'
    case '1':
      return `${matrixInfo.owner} has registered 1 set of this matrix.`
    default:
      return `${matrixInfo.owner} has registered ${matrixInfo.quantity} sets of this matrix.`
  }
}
const registeredOK = 'Registered successfully! Please log in.'
const registering = 'Registering you…'
const registrationFailed = 'Sorry! Registration failed mysteriously ☹️ — try again or log-in with a different account.'
const unequalPassword = 'Password entries are not identical; please re-enter both.'
const userInfo = function () {
  let str = (store.user.name) ? store.user.name : store.user.email
  if (store.user.organization) str += ` — ${store.user.organization}`
  return str
}
const withWord = 'with '

module.exports = {
  alreadyRegistered,
  badEmailPassword,
  andWord,
  loginFailUnknownCause,
  loggingIn,
  loggingOut,
  loginToOwn,
  noEmail,
  noPassword,
  notInDatabase,
  noPrefixSuffix,
  otherServerError,
  ownerMsg,
  registeredOK,
  registering,
  registrationFailed,
  unequalPassword,
  userInfo,
  withWord
}
