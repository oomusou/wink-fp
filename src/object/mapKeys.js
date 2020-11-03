import { pipe, toPairs, adjust, fromPairs, map, uncurryN } from 'ramda'

let _mapKeys = f => pipe(
  toPairs,
  map(adjust(0, f)),
  fromPairs
)

export let mapKeys = uncurryN(2)(_mapKeys)