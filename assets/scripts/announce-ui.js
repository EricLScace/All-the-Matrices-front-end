'use strict'
// Utilities to manage the announcement area.

const append = function (msg) {
  // Erase & insert the requested announcement in the proper language.
  $('#announcement').append('<br>' + msg)
}

const clear = function () {
  // Erase announcements.
  $('#announcement').html('')
}

const post = function (msg) {
  // Erase & insert the requested announcement in the proper language.
  $('#announcement').html(msg)
}

module.exports = {
  append,
  clear,
  post
}
