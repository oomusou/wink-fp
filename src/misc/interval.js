// interval :: Number -> (() -> *) -> Number
export let interval = ms => f => setInterval(f, ms)