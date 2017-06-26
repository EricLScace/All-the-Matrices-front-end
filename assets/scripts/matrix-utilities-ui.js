'use strict'
// Matrix utilities to achieve DRY code
const announceUI = require('./announce-ui.js')
const getMatrixTemplate = require('../templates/getMatrix.handlebars')
const msg = require('./messages.js')
const setUpdateForm = require('../templates/setUpdateForm.handlebars')
const store = require('./store')

const displayMatrix = function (response) {
  announceUI.clear('announcement')
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
  } else {
    announceUI.append(msg.loginToOwn, 'matrix-response')
  }
  // Empty & reload form
  $('#matrix-request').html(getMatrixTemplate())
}

module.exports = {displayMatrix}
