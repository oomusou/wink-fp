import { pipe, curry, flip, gte, prop, useWith } from 'ramda'

// propGte :: String -> a -> Object -> Boolean
export let propGte = pipe(
  useWith(pipe, [prop, flip(gte)]),
  curry
)
