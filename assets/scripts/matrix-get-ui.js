'use strict'
// Invoked by API response & UI actions for getting matrix info.
// const getFormFields = require('../../../lib/get-form-fields')
const getMatrixTemplate = require('../templates/getMatrixTemplate.handlebars')

const loadGetMatrixForm = function () {
  $('#matrix').html(getMatrixTemplate())
}

module.exports = {loadGetMatrixForm}
