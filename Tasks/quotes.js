// Refactor following solution
// Change double quotation to open or close quotation

'use strict';

const quotes = (str) => {
  let open = true;
  while (str.includes('"')) {
    if (open) {
      str = str.replace('"', "«");
      open = false;
    } else {
      str = str.replace('"', "»");
      open = true;
    }
  }
  return str;
};

module.exports = quotes;
