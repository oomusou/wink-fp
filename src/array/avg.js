import { lift, divide, sum, length } from 'ramda'

export let avg = lift(divide)(sum, length)