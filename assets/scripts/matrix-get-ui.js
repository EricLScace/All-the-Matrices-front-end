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
  announceUI.post(matrixInfo.code, 'response')
  // Display the details about the matrix
  announceUI.append(matrixInfo.normal_typeface, 'response')
  if (matrixInfo.aux1_typeface) {
    announceUI.append(`${msg.withWord}${matrixInfo.aux1_typeface}`, 'response')
    if (matrixInfo.aux2_typeface) {
      announceUI.append(`${msg.andWord}${matrixInfo.aux2_typeface}`, 'response')
    }
  }
  // Display any details about sets owned if logged in.
  if (store.user.isLoggedIn) {
    announceUI.append(msg.ownerMsg(matrixInfo), 'response')
    $('#response').append(setUpdateForm())
    $('#response').on('submit', onUpdateSets)
  } else {
    announceUI.append(msg.loginToOwn, 'response')
  }
  // Empty & reload form
  loadGetMatrixForm()
}

const getMatrixFailure = function (response) {
  announceUI.clear('announcement')
  announceUI.post(msg.notInDatabase, 'response')
}

const getMatrixSuccess = function (response) {
  announceUI.clear('announcement')
  if (response) {
    displayMatrix(response)
  } else {  // Response empty; therefore not in database
    announceUI.post(msg.notInDatabase, 'response')
  }
  loadGetMatrixForm()
}

const loadGetMatrixForm = function () {
  // Erase DOM and post the form
  $('#matrix').html(getMatrixTemplate())
  $('#matrix').on('submit', onGetMatrix)
  // Clicks removes past announcements.
  $('#matrix').on('click', announceUI.clear())
}

const onGetMatrix = function (e) {
  e.preventDefault()
  const matrix = getFormFields(e.target).matrix
  // Some input?
  if (matrix.code_prefix === '' || matrix.code_suffix === '') {
    announceUI.clear('response')
    announceUI.post(msg.noPrefixSuffix)
  } else {
    announceUI.clear()
    matrixAPI.show(matrix)
      .then(getMatrixSuccess)
      .catch(getMatrixFailure)
  }
}

const onUpdateSets = function (e) {
  e.preventDefault()
  store.matrix.quantity = getFormFields(e.target).quantity
  if (store.matrix.quantity === '') store.matrix.quantity = '0'
  matrixAPI.update(store.matrix)
    .then(getMatrixSuccess)
    .catch(getMatrixFailure)
}

module.exports = {loadGetMatrixForm}
