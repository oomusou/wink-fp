import { propOr, curry } from 'ramda'

export let lookup = curry((a, o, k) => propOr(a, k , o))