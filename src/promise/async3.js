export let async3 = f => x => y => z => Promise.resolve(f(x)(y)(z))
