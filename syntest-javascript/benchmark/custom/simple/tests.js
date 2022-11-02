const { humanReadableArgName } = require("../../top10npm/commanderjs/lib/argument");


function test (x) {
  if (x) {
    return
  }

  switch (x) {
    case 'a':
      break
    case 'b':
    case 'c':
      break
    default:
      if (x === 'd') {
        return
      } else {
        x = 'e'
      }
  }
}

module.exports = { test } // test,
