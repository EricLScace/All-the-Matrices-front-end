'use strict'
// messages in English for now
const andWord = 'and '
const loginToOwn = 'Logged-in users may register the number of sets of this matrix they own.'
const noPrefixSuffix = 'Please enter both the suffix & prefix codes from the matrix.'
const notInDatabase = 'Code not yet in this database (or was never manufactured).'
const otherServerError = 'Database not available. Please try again later.'

const ownerMsg = function (matrixInfo) {
  switch (matrixInfo.quantity) {
    case null:
      return 'You have not registered any sets of this matrix.'
    case 0:
      return 'You have not registered any sets of this matrix.'
    case 1:
      return `${matrixInfo.owner} has registered 1 set of this matrix.`
    default:
      return `${matrixInfo.owner} has registered ${matrixInfo.quantity} sets of this matrix.`
  }
}

const withWord = 'with '

module.exports = {
  andWord,
  loginToOwn,
  notInDatabase,
  noPrefixSuffix,
  otherServerError,
  ownerMsg,
  withWord
}
