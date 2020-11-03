import { pipe, curry, flip, lte, prop, useWith } from 'ramda'

export let propLte = pipe(
  useWith(pipe, [prop, flip(lte)]),
  curry
)
