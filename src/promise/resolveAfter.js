import { flip, andThen, thunkify, useWith } from 'ramda'
import { sleep } from './sleep'
import { resolve } from './resolve'

export let resolveAfter = useWith(
  flip(andThen),
  [sleep, thunkify(resolve)]
)
