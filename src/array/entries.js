import { addIndex, map } from 'ramda'

export let entries = addIndex(map)((v, k) => [k, v])
