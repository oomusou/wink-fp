import { bind } from 'ramda'

export let clearStorage = bind(localStorage.clear, localStorage)