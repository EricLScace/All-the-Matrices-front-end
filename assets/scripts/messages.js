'use strict'
const store = require('./store')

// messages in English for now
const alreadyRegistered = 'This email address is already registered. Attempting to log you in…'
const andWord = 'and '
const badEmailPassword = 'This email or password was not recognized. Please try again, or re-register.'
const changingPassword = 'Changing your password…'
const loginFailUnknownCause = 'Sorry! Logging in failed mysteriously ☹️ — try again, or try later.'
const loggingIn = 'Logging you in…'
const loggingOut = 'Logging you out…'
const loginToOwn = 'Logged-in users may register the number of sets of this matrix they own.'
const lookingUpMatrix = 'Looking up this matrix code…'
const matrixGetFailed = 'Sorry! The matrix code look-up failed mysteriously ☹️ — try again, or try later.'
const matrixSetQuantityUpdated = 'Matrix set quantity updated.'
const matrixSetQuantityUpdateFailed = 'Sorry! The update of the number of matrix sets owned failed mysteriously ☹️ — try again, or try later.'
const noPrefixSuffix = 'Please enter both the suffix & prefix codes from the matrix.'
const noEmail = 'Please enter your email address.'
const noOldPassword = 'Please enter your current password.'
const noPassword = 'Please enter your new password twice identically.'
const notInDatabase = 'Code not yet in this database (or was never manufactured).'
const notPositiveInteger = 'Please enter a positive integer.'
const otherServerError = 'Database not available. Please try again later.'
const ownerMsg = function (matrixInfo) {
  matrixInfo.owner = (matrixInfo.owner === '') ? 'User' : matrixInfo.owner
  switch (matrixInfo.quantity) {
    case null:
      return '<br><br>You have not registered any sets of this matrix.'
    case '0':
      return '<br><br>You have not registered any sets of this matrix.'
    case '1':
      return `<br><br>${matrixInfo.owner} has registered 1 set of this matrix.`
    default:
      return `<br><br>${matrixInfo.owner} has registered ${matrixInfo.quantity} sets of this matrix.`
  }
}
const passwordChanged = 'Password changed successfully.'
const passwordChangeFailed = 'Sorry! Registration failed mysteriously ☹️ — please try again later.'
const registeredOK = 'Registered successfully! Please log in.'
const registering = 'Registering you…'
const registrationFailed = 'Sorry! Registration failed mysteriously ☹️ — try again or log-in with a different account.'
const unequalPassword = 'Your new password entries are not identical; please re-enter both.'
const userInfo = function () {
  let str = (store.user.name) ? store.user.name : store.user.email
  if (store.user.organization) str += ` — ${store.user.organization}`
  return str
}
const withWord = 'with '

module.exports = {
  alreadyRegistered,
  andWord,
  badEmailPassword,
  changingPassword,
  loginFailUnknownCause,
  loggingIn,
  loggingOut,
  loginToOwn,
  lookingUpMatrix,
  matrixGetFailed,
  matrixSetQuantityUpdated,
  matrixSetQuantityUpdateFailed,
  noEmail,
  noOldPassword,
  noPassword,
  notInDatabase,
  notPositiveInteger,
  noPrefixSuffix,
  otherServerError,
  ownerMsg,
  passwordChanged,
  passwordChangeFailed,
  registeredOK,
  registering,
  registrationFailed,
  unequalPassword,
  userInfo,
  withWord
}
