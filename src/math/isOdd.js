import { compose, equals, flip, modulo } from 'ramda'

export let isOdd = compose(equals(1), flip(modulo)(2))
