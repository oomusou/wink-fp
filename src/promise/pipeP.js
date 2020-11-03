import { unapply, pipeWith, andThen } from 'ramda'

export let pipeP = unapply(pipeWith(andThen))
