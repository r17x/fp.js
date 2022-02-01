import { eq } from './eq'
import { length } from './length'

/**
  * Curry function
  *
  * @param {Function} f a function with param
  * @param {...T} a params function `f`
  * @return {Function|T} it can be function or return value of `f`
  * @example
  * ```javascript
  * const add = (a, b) => a + b
  *
  * const add2 = curry(add, 2) // a is 2
  *
  * add2(5) // b is 5
  * // 2 + 5 = 7
  *
  * add2(5,5)
  * // Error
  * ```
  */
export const curry = (f, ...a) =>
  eq(length(f), length(a))
    ? f(...a)
    : (...b) => curry(f, ...a, ...b)
