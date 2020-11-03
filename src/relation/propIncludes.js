import { pipe, useWith, prop, includes } from 'ramda'

// propIncludes :: k -> v -> {k: v} -> Boolean
export let propIncludes = useWith(
  pipe, [prop, includes]
)