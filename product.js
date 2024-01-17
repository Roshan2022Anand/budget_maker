const prompt = require('prompt-sync')();
let inventory = [
    obj1={
        name : 'cream',
        price :120,
        quantity :10
    },obj2={
        name : 'paste',
        price :80,
        quantity :4
    },obj3={
        name : 'bottle',
        price :300,
        quantity :3
    },obj4={
        name : 'jam',
        price :30,
        quantity :1
    },obj5={
        name : 'pencil',
        price :40,
        quantity :5
    },obj6={
        name : 'pokeball',
        price :200,
        quantity :15
    }
]
console.log(inventory);
let inc = prompt("How much should i increse the product price :");
inventory.forEach((value)=>{
    value['price']+=(value['price']*(inc/100));
})
console.log(inventory);

let filInv = inventory.filter((value)=>{
    return value['quantity']<5
})
console.log('The products having the quatity less than 5 is \n',filInv);