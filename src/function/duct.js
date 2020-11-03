import { pipe } from 'ramda'

// duct :: (...Function) -> Function
export let duct = (...f) => pipe(...f)()