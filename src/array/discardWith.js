import { useWith, identity, of } from 'ramda'
import { withoutWith } from './withoutWith'

// discardWith :: ((a, a) -> Boolean) -> a -> [a] -> [a]
export let discardWith = useWith(
  withoutWith, [identity, of, identity]
)