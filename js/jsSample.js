const prices = [100, 200, 300];

function getTax(price) {
  return new Promise(resolve =>
    setTimeout(() => resolve(price * 0.12), 300)
  );
}


async function getTotal(){
  let res = await prices.reduce(async (accPrice, p) => {
    let acc = await accPrice;
    let result = await getTax(p);
    
    return acc += result;
  },0)
  console.log(res)
}

getTotal()