// compose :: (...Function) -> Function
export let compose = (...f) => v => f.reduceRight((g, f) => f(g), v)
