import { pipe } from 'ramda'
import { curry, bind, always } from 'ramda'

export let writeStorage = pipe(
  always(localStorage),
  bind(localStorage.setItem),
  curry
)()