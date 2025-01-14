// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const drop = (dictionary, ...keysToRemove) => {
  const dictKeys = Object.keys(dictionary);
  
  return dictionary;
};

module.exports = drop;
