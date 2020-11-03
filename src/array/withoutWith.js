import { differenceWith, curry } from 'ramda'

let _withoutWith = (pred, a1, a2) => differenceWith(pred, a2, a1)
export let withoutWith = curry(_withoutWith)