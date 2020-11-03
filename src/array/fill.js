import { clone } from 'ramda'

export let fill = begin => end => v => a => clone(a).fill(v, begin, end)
