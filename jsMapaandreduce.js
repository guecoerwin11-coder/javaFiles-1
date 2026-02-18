function memoize(fn){
    let num = 0
    let getAdd;
    let tryAgain = false
    return function(...args){
        if(num < 2){
            getAdd = fn.apply(this, args)
            num++
            tryAgain = true
        }
        return getAdd;
    }
}


const slowAdd = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

const memoized = memoize(slowAdd);

memoized(2, 3); // Calculating... → 5
memoized(2, 3); // 5 (no "Calculating...")
memoized(3, 4); // Calculating... → 7
memoized(2, 3); // 5
