import { addIndex, map } from 'ramda'

export let array_entries = addIndex(map)((v, k) => [k, v])
