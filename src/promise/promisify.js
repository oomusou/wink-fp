export let promisify = f => (...args) => new Promise((resolve, reject) =>
  f(...args, (err, data) => (err) ? reject(err) : resolve(data)))
