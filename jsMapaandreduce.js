//map and reduce

const listItems = [
    {id: 1, user: "Erwin", items:"Books", price: 2000},
    {id: 2, user: "Rona", items:"Tv", price: 1500},
    {id: 3, user: "Apey", items:"Ballpen", price: 250},
    {id: 4, user: "Erwin", items:"Laptop", price: 3400},
]

let getUser = listItems.map(u => `the clients is ${u.user}`)
console.log(getUser)

let getItems = listItems.reduce((acc, { id, user, items, price }) => {
    if(!acc[user]){
        acc[user] = {
            total: 0,
            item: []
        }
    }
    acc[user].total += price;
    acc[user].item.push(items)
    return acc;
}, {})
console.log(getItems)