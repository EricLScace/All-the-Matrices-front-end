'use strict'
// Matrix section of page.
const getFormFields = require('../../lib/get-form-fields')
const announceUI = require('./announce-ui.js')
const getMatrixTemplate = require('../templates/getMatrix.handlebars')
const matrixAPI = require('./matrix-api.js')
const msg = require('./messages.js')
const setUpdateForm = require('../templates/setUpdateForm.handlebars')
const store = require('./store')

const displayMatrix = function (response) {
  const matrixInfo = response.matrix
  announceUI.post(matrixInfo.code, 'matrix-response')
  // Display the details about the matrix
  announceUI.append(matrixInfo.normal_typeface, 'matrix-response')
  if (matrixInfo.aux1_typeface) {
    announceUI.append(`${msg.withWord}${matrixInfo.aux1_typeface}`, 'matrix-response')
    if (matrixInfo.aux2_typeface) {
      announceUI.append(`${msg.andWord}${matrixInfo.aux2_typeface}`, 'matrix-response')
    }
  }
  // Display any details about sets owned if logged in.
  if (store.user.isLoggedIn) {
    announceUI.append(msg.ownerMsg(matrixInfo), 'matrix-response')
    $('#matrix-response').append(setUpdateForm())
    $('#matrix-response').on('submit', onUpdateSets)
  } else {
    announceUI.append(msg.loginToOwn, 'matrix-response')
  }
  // Empty & reload form
  $('#matrix-request').html(getMatrixTemplate())
}

const failure = function (response) {
  announceUI.clear('announcement')
  announceUI.post(msg.notInDatabase, 'matrix-response')
}

const onRequest = function (e) {
  e.preventDefault()
  const matrix = getFormFields(e.target.form).matrix
  // Some input?
  if (matrix.code_prefix === '' || matrix.code_suffix === '') {
    announceUI.clear('matrix-response')
    announceUI.post(msg.noPrefixSuffix)
  } else {
    announceUI.clear()
    matrixAPI.show(matrix)
      .then(success)
      .catch(failure)
  }
}

const onUpdateSets = function (e) {
  e.preventDefault()
  store.matrix.quantity = getFormFields(e.target).quantity
  if (store.matrix.quantity === '') store.matrix.quantity = '0'
  matrixAPI.update(store.matrix)
    .then(success)
    .catch(failure)
}

const success = function (response) {
  announceUI.clear('announcement')
  if (response) {
    displayMatrix(response)
  } else {  // Response empty; therefore not in database
    announceUI.post(msg.notInDatabase, 'matrix-response')
  }
  $('#matrix-request').html(getMatrixTemplate())
}

module.exports = {onRequest}
