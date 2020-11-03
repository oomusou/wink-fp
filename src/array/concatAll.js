import { concat, reduce, unapply } from 'ramda'

export let concatAll = unapply(reduce(concat, []))
