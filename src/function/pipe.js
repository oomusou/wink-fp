// pipe :: (...Function) -> Function
export let pipe = (...f) => v => f.reduce((g, f) => f(g), v)
