// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (array) => {
  let result = [];
  for(const item of array)
  {
    if(!result.includes(item))
    {
      result.push(item);
    }
  }
  return result;
};

module.exports = distinct;
