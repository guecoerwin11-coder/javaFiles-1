function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return resolve([]);
    }

    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value; // preserve order
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error); // fail fast
        });
    });
  });
}
        
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3])
  .then(res => console.log(res)) // [1, 2, 3]
  .catch(err => console.log(err));
