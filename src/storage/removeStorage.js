import { bind } from 'ramda'

export let removeStorage = bind(localStorage.removeItem, localStorage)
