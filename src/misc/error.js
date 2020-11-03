import { bind } from 'ramda'

export let error = bind(console.error, console)