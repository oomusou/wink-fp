import { compose, filter, identity, of, unnest } from 'ramda'

export let wrap = compose(filter(identity), unnest, of)
