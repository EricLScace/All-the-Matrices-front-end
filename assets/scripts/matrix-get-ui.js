'use strict'
// Matrix data request
const announceUI = require('./announce-ui.js')
const getFormFields = require('../../lib/get-form-fields')
const getMatrixTemplate = require('../templates/getMatrix.handlebars')
const matrixAPI = require('./matrix-api.js')
const matrixUtiltiesUI = require('./matrix-utilities-ui')
const msg = require('./messages.js')

const failure = function (response) {
  announceUI.post(msg.matrixGetFailed)
  $('#matrix-request').html(getMatrixTemplate())
}

const onRequest = function (e) {
  e.preventDefault()
  const matrix = getFormFields(e.target.form).matrix
  // Some input?
  announceUI.clear('matrix-response')
  if (matrix.code_prefix === '' || matrix.code_suffix === '') {
    announceUI.post(msg.noPrefixSuffix)
  } else {
    announceUI.post(msg.lookingUpMatrix)
    matrixAPI.show(matrix)
      .then(success)
      .catch(failure)
  }
}

const success = function (response) {
  announceUI.clear('announcement')
  if (response) {
    matrixUtiltiesUI.displayMatrix(response)
  } else {
    // Response empty; therefore not in database
    announceUI.post(msg.notInDatabase, 'matrix-response')
  }
  $('#matrix-request').html(getMatrixTemplate())
}

module.exports = {onRequest}
