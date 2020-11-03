import { pipe, toPairs, adjust, fromPairs, map, uncurryN } from 'ramda'

let _mapValues = f => pipe(
  toPairs,
  map(adjust(1, f)),
  fromPairs
)

export let mapValues = uncurryN(2)(_mapValues)