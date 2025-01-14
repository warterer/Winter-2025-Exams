// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const drop = (dictionary, ...keysToRemove) => {
  const dictKeys = Object.keys(dictionary);
  for (const key of keysToRemove) {
    if (dictKeys.includes(key)) {
      delete dictionary[key];
    }
  }
  return dictionary;
};

module.exports = drop;
