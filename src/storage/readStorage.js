import { pipe, bind, ifElse, isNil, always } from 'ramda'
import { create, env } from 'sanctuary'

let { Just, Nothing } = create ({ checkTypes: false, env })

export let readStorage = pipe(
  bind(localStorage.getItem, localStorage),
  ifElse(isNil, always(Nothing), Just)
)