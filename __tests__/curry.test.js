import { curry } from '../src/curry'

const add = (a, b, c, d, e) =>
  a + b + c + d + e

test(' curry-ing add ', () => {
  const curriedAdd = curry(add)

  expect(curriedAdd(1, 2, 3, 4, 5)).toBe(15)
})

test(' curry-ing partial apply', () => {
  const curriedAdd = curry(add)

  const addFirstOne = curriedAdd(1)

  expect(addFirstOne(1, 1, 1, 1)).toBe(5)
})
