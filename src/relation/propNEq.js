import { complement, propEq } from 'ramda'

// propNEq :: String -> a -> Object -> Boolean
export let propNEq = complement(propEq)
