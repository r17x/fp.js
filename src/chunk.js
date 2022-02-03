import { length } from "./length";

/**
 * Turn an array into smaller array of the given size
 *
 * @param {Array} arr - An array or map of values.
 * @param {number} size - Size of the values inside a collection, if it exceeds the size, continue with a new collection
 * @return {Array} it can be function or return value of `f`
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
