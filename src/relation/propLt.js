import { pipe, curry, flip, lt, prop, useWith } from 'ramda'

// propLt :: String -> a -> Object -> Boolean
export let propLt = pipe(
  useWith(pipe, [prop, flip(lt)]),
  curry
)
