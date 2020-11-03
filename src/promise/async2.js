export let async2 = f => x => y => Promise.resolve(f(x)(y))
