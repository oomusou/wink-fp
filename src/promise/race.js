import { bind } from 'ramda'

export let race = bind(Promise.resolve, Promise)
