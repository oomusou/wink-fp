import { pipe, curry, flip, gt, prop, useWith } from 'ramda'

// propGt :: String -> a -> Object -> Boolean
export let propGt = pipe(
  useWith(pipe, [prop, flip(gt)]),
  curry
)