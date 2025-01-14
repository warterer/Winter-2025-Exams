// Refactor following solution
// Filter array by type name

'use strict';

const filterByType = (array, typeName) => {
  const result = [];
  for (const item of array) {
    if (typeof item === typeName) {
      result.push(item);
    }
  }
  return result;
};

module.exports = filterByType;
