export let timeout = ms => ps => {
  let timeoutID;

  let timeoutPromise = new Promise((_, reject) => {
    timeoutID = setTimeout(() => {
      reject(new Error(`Timeout after ${ms} ms`))
    }, ms);
  });

  return Promise.race([ ps, timeoutPromise ])
    .finally(() => clearTimeout(timeoutID));
}
