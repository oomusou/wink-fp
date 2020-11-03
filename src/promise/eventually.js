export let eventually = cb => ps => ps.finally(cb)
