import { pipe, of, without, uncurryN } from 'ramda'

// discard :: a -> [a] -> a
export let discard = uncurryN(2)(pipe(of, without))