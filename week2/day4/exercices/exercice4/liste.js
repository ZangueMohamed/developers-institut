
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 



function myBill(){

    let shoppingList = ["banana", "orange", "apple"];

        let total = 0

    for (let item of shoppingList){
        if (stock[item] > 0) {
            total += prices[item]
        }
    
    }

    return total


}

console.log(myBill());
