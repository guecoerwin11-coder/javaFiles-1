function limit(fn, n) {
  let count = 0;
  let lastResult;

  return function(...args) {
    if (count < n) {
      lastResult = fn.apply(this, args);
      count++;
    }
    return lastResult;
  };
}




function greet(name) {
  console.log("Hello " + name);
  return name;
}

const limited = limit(greet, 2);

limited("Erwin"); // Hello Erwin
limited("Ana");   // Hello Ana
limited("John");  // ❌ hindi na tatakbo
limited("Mike");  // ❌ hindi na tatakbo
