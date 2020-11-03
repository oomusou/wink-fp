import { compose, equals, flip, modulo } from 'ramda'

export let isEven = compose(equals(0), flip(modulo)(2))
