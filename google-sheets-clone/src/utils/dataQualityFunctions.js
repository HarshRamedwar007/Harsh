export const trimValue = (value) => value.trim();

export const upperCaseValue = (value) => value.toUpperCase();

export const lowerCaseValue = (value) => value.toLowerCase();

export const removeDuplicates = (array) => [...new Set(array)];

export const findAndReplace = (array, find, replace) => {
  return array.map(item => item === find ? replace : item);
};