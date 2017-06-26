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
  if (store.matrix.quantity === '') store.matrix.quantity = '0'
  matrixAPI.update(store.matrix)
    .then(success)
    .catch(failure)
}

const success = function (response) {
  matrixUtiltiesUI.displayMatrix(response)
  announceUI.append(msg.matrixSetQuantityUpdated, 'matrix-response')
}

module.exports = {onUpdate}
