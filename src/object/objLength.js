import { compose, keys, length } from 'ramda'

export let objLength = compose(length, keys)
