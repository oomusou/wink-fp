import { pipe, clone, mergeDeepRight } from 'ramda'

export let mix = pipe(
  clone,
  mergeDeepRight
)

