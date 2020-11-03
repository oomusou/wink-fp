import { always, ifElse, isNil } from 'ramda'
import { create, env } from 'sanctuary'

let { Nothing, Just } = create ({ checkTypes: false, env })

// toMaybe :: a -> Maybe a
export let toMaybe = ifElse(isNil, always(Nothing), Just)