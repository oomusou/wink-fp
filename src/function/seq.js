import { forEach } from 'ramda'

// seq :: ((a -> *),...) -> a -> a
export let seq = (...f) => x => (forEach(f => f(x), f), x)