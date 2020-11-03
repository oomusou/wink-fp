import { complement, isNil } from 'ramda'

export let isNotNil = complement(isNil)
