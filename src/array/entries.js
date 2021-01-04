import { addIndex, map, pair, flip } from 'ramda'

export let entries = addIndex(map)(flip(pair))
