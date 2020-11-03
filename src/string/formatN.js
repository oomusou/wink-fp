import format from 'string-format'
import { curryN } from 'ramda'

export let formatN = n => curryN(n+1, format)