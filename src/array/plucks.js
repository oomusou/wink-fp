import { curryN, map, props } from 'ramda'

export let plucks = curryN(2, (ps, a) => map(props(ps), a))