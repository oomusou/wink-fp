import { compose, head, identity, pluck, useWith } from 'ramda'

export let tug = useWith(
  compose(head, pluck), [identity, identity]
)
