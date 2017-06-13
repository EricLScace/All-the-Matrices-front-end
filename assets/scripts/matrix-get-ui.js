'use strict'
// Matrix section of page.
const getFormFields = require('../../lib/get-form-fields')
const announceUI = require('./announce-ui.js')
const getMatrixTemplate = require('../templates/getMatrixTemplate.handlebars')
const matrixAPI = require('./matrix-api.js')
const msg = require('./messages.js')

const onGetMatrix = function (e) {
  e.preventDefault()
  const matrix = getFormFields(e.target).matrix
  // Some input?
  if (matrix.code_prefix === '' || matrix.code_suffix === '') {
    announceUI.post(msg.noPrefixSuffix)
  } else {
    announceUI.clear()
    matrixAPI.show(matrix)
      .then(getMatrixSuccess)
      .catch(getMatrixFailure)
  }
}

const getMatrixFailure = function (response) {
  // Reload getMatrix form.
  // If no-content, announce that matrix not yet in db.
  // Else display try-later.
  return true
}

const getMatrixSuccess = function (response) {
  // Version number check
  // Display the descriptive info.
  const matrixInfo = response.matrix
  announceUI.post(matrixInfo.code)
  announceUI.append(matrixInfo.normal_typeface)
  if (matrixInfo.aux1_typeface !== '') {
    announceUI.append('with')
    announceUI.append(response.matrix.aux1_typeface)
    if (matrixInfo.aux2_typeface !== '') {
      announceUI.append('and')
      announceUI.append(response.matrix.aux2_typeface)
    }
  }
  // If ownership data provided
    // display that as well
    // and prompt to change quantities.
  // Else display info note about to register/log-in
  // Display get-another reload of form
  return true
}
const loadGetMatrixForm = function () {
  $('#matrix').html(getMatrixTemplate())
  $('#matrix').on('submit', onGetMatrix)
  // Submission removes past announcements.
  $('#matrix').on('click', announceUI.clear)
}

module.exports = {loadGetMatrixForm}
