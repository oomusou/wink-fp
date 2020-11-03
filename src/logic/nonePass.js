import { anyPass, complement, compose } from 'ramda'

export let nonePass = compose(complement, anyPass)
