import { length } from "./length";

/**
 * Turn an array into smaller arrays of the given size
 *
 * @param {Array} arr - An array or map of values.
 * @param {number} size - Size of the values inside an array
 * @return {Array} - returns an array of smaller arrays of the given size
 * @example
 * ```javascript
 * const boy = ['cool', 'shirt'];
 *
 * const chunkedBoy = chunk(boy, 1);
 *
 * console.log(chunkedBoy); // [['cool'], ['shirt']]
 */
export const chunk = (arr, size) =>
  length(arr) > size
    ? [arr.slice(0, size), ...chunk(arr.slice(size), size)]
    : [arr];
