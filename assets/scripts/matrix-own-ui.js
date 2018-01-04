'use strict'
// Matrix ownership handler
const announceUI = require('./announce-ui.js')
const getFormFields = require('../../lib/get-form-fields')
const matrixAPI = require('./matrix-api.js')
const matrixUtiltiesUI = require('./matrix-utilities-ui')
const msg = require('./messages.js')
const store = require('./store')

const failure = function () {
  announceUI.post(msg.matrixGetFailed)
}

// Change number of matrix sets owned by the logged-in users
const onUpdate = function (e) {
  e.preventDefault()
  store.matrix.quantity = getFormFields(e.target.form).quantity
  if (validateQuantity(store.matrix.quantity)) {
    matrixAPI.update(store.matrix)
      .then(success)
      .catch(failure)
  }
}

const success = function (response) {
  matrixUtiltiesUI.displayMatrix(response)
  announceUI.append(msg.matrixSetQuantityUpdated)
}

// Return true if entered quantity is a positive integer
// Else return false
const validateQuantity = function (quantity) {
  // Ignore a blank: probably a click error that would erase the quantity/
  if (quantity === '') return false
  // Be sure quantity is not a string
  quantity = +quantity
  // No negative numbers or non-integers
  if (quantity < 0 || !Number.isInteger(quantity)) {
    announceUI.post(msg.notPositiveInteger)
    return false
  }
  return true
}

module.exports = {onUpdate}
