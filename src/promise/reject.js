import { bind } from 'ramda'

export let reject = bind(Promise.reject, Promise)
