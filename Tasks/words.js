// Refactor following solution
// Count words in a string

'use strict';

const words = (str) => {
  if(str.length === 0)
  {
    return 0;
  }
  const array = str.split(' ');
  return array.length;
};

module.exports = words;
