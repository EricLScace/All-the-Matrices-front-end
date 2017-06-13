'use strict'
// Utilities to manage the response area.

const append = function (msg, loc) {
  // Erase & insert the requested announcement in the proper language.
  $('#' + loc).append('<br>' + msg)
}

const clear = function (loc) {
  // Erase announcements.
  $('#' + loc).html('')
}

const post = function (msg, loc) {
  // Erase & insert the requested announcement in the proper language.
  $('#' + loc).html(msg)
}

module.exports = {
  append,
  clear,
  post
}
