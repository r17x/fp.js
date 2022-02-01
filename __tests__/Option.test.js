import * as Option from '../src/Option'

test('isNone', () => {
  const none = Option.of(undefined)

  expect(none.isNone()).toBe(true)
})

test('isSome', () => {
  const someOne = Option.of(1)

  expect(someOne.isSome()).toBe(true)
})

test('getOrElse zero', () => {
  const someOne = Option.of(1)
  expect(someOne.getOrElse(0)).toBe(1)
})

test('id of someOne', () => {
  const someOne = Option.of(1)
  expect(someOne.id()).toStrictEqual(Option.Some(1))
})

test('map with someOne', () => {
  const someOne = Option.of(1)
  expect(someOne.map(a => a + 2)).toStrictEqual(Option.Some(3))
})
