export let mergeOnly = obj1 => obj2 =>
  Object
    .keys(obj1)
    .reduce((a, k) => ({...a, [k]: obj2[k] || obj1[k]}), {})
