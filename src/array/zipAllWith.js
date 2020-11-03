import { reduce, zipWith, head, tail, converge } from 'ramda'


export let zipAllWith = f => converge(
  reduce(zipWith(f)), [head, tail]
)
