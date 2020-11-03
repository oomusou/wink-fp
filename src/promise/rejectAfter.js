import { flip, andThen, thunkify, useWith } from 'ramda'
import { sleep } from './sleep'
import { reject } from './reject'

export let rejectAfter = useWith(
  flip(andThen),
  [sleep, thunkify(reject)]
)
