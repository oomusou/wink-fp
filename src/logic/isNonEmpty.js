import { complement, isEmpty } from 'ramda'

export let isNonEmpty = complement(isEmpty)