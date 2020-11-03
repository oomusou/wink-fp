import { pipe, toUpper, join, adjust } from 'ramda'

export let capitalize = pipe(
  adjust(0, toUpper),
  join('')
)