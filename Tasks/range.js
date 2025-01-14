// Refactor following solution
// Generate int array from given range

'use strict';

const generateArray = (...range) => {
  const [from, to] = range;
  if(to < from)
  {
    return [];
  }
  const result = [];
  for(let i = from; i <= to; i++)
  {
    result.push(i);
  }
  return result;
};

module.exports = generateArray;
