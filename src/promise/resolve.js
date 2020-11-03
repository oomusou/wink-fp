import { bind } from 'ramda'

export let resolve = bind(Promise.resolve, Promise)
