// const prices = [100, 200, 300];

// function getTax(price) {
//   return new Promise(resolve =>
//     setTimeout(() => resolve(price * 0.12), 300)
//   );
// }


// async function getTotal(){
//   let res = await prices.reduce(async (accPrice, p) => {
//     let acc = await accPrice;
//     let result = await getTax(p);
    
//     return acc += result;
//   },0)
//   console.log(res)
// }

// getTotal()

//manual promises race
// function myPromiseRace(promises){ // this is function implementation
//   return new Promise((resolve, reject) => {
//       promises.forEach(promise => { // the promises via forEach
//         Promise.resolve(promise)    // this already a promise
//         .then(value => resolve(value)) // this first to finish to output with Settimeout of 200
//         .catch(error => reject(error)) // this is the rest of the data in the promise
//       })

      
//   })
// }

// const p1 = new Promise(res => setTimeout(() => res("A"), 1000));
// const p2 = new Promise(res => setTimeout(() => res("B"), 200));
// const p3 = new Psromise(res => setTimeout(() => res("C"), 500));

// myPromiseRace([p1, p2, p3])
//   .then(console.log);


  
//manual promise all
  function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return resolve([]); //if the promise is equal to 0 then return with an empty array
    }
    const results = []; // container that store each array
    let completed = 0; //it count for every array
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value; // preserve order
          completed++; // increement after the preserve order
          if (completed === promises.length) {
            resolve(results); // if the loop of done and all equal 
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
