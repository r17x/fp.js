import { id } from './id'

const VAL = Symbol.for('VALUE'),
  TAG = Symbol.for('TAG')

const Some = x => ({
  [TAG]: 'some',
  [VAL]: x,
})

const None = () => ({
  [TAG]: 'none',
})

const unsafe_get = opt => opt[VAL]

const isSome = x => x[TAG] === 'some'

const isNone = x => x[TAG] === 'none'

const getOrElse = (else_, opt) => ({
  [isSome(opt)]: unsafe_get(opt),
  [isNone(opt)]: else_
})[true];


const Option = x => ({
  isSome: () => isSome(x),
  isNone: () => isNone(x),
  id: () => id(x),
  getOrElse: (b) => getOrElse(b, x),
  map: (f) =>
    Some(
      f(
        getOrElse(
          None(),
          x
        )
      )
    )
})

const of = x =>
  Option(
    x === null
      || x === undefined
      ? None()
      : Some(x)
  )

export {
  of,
  Some,
  None,
  isSome,
  isNone,
  getOrElse,
}
