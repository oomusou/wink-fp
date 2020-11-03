import { compose, pickAll, values } from 'ramda'

export let pickIndexes = compose(values, pickAll)
