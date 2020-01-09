/**
 * Get array with objects and return array with field name
 * @param array: []
 * @param fieldName: 'string'
 * @returns [*]
 */
export const getArrayByFieldName = (array, fieldName = 'name') => {
  const newArray = [];
  array.forEach(item => newArray.push(item[fieldName]));

  return newArray;
};

/**
 * Get random number
 * @param number
 * @returns number
 */
export const randomByNum = number => Math.floor(Math.random() * number);

/**
 * Get array by filter
 * @param array: []
 * @param filter: 'string'
 * @returns [*]
 */
export const getFilteredCollection = (array, filter = 'all') =>
  filter === 'all' ? array : array.filter(item => item.params.includes(filter));

/**
 * Getting random item from array
 * @param array: []
 * @param filter: 'string'
 * @returns {{name, params}}
 */
export const getRandomItem = (array, filter) => {
  const coll = getFilteredCollection(array, filter);
  return coll[randomByNum(coll.length)];
};
