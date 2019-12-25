/**
 * Get array with objects and return array with field name
 * @param array: {Array}
 * @param fieldName: string
 * @returns {Array}
 */
export const getArrayByFieldName = (array, fieldName = 'name') => {
  const newArray = [];
  array.forEach(item => newArray.push(item[fieldName]));

  return newArray;
};

/**
 * Get random number
 * @param number
 * @returns {number}
 */
export const randomByNum = number => Math.floor(Math.random() * number);

/**
 * Get array and return array by filter
 * @param array
 * @param filter
 * @returns {*}
 */
export const getFilteredCollection = (array, filter = 'all') => {
  return array.filter((item) => item.params.includes(filter));
};

/**
 * Getting random item from array
 * @param array
 * @param filter
 * @returns {*}
 */
export const getRandomItem = (array, filter) => {
  const coll = getFilteredCollection(array, filter);
  return coll[randomByNum(coll.length)];
};
