// MAP METHOD
let array=[1,2,3,4,5,6,7,8,9,10]
const num= array.map((n) => n+10)
console.log(num);
// For Each lOOP CHECKING
let array2=[]
array.forEach((n) => {
    if(n){
        array2.push(n*10)
    }
})
console.log(array2);
// CHAINING
// WE CAN USE DOUBLE OR EVEN TRIPLE METHODS
let num2= array.map((n) => n *10).map((n) => n+10)
console.log(num2);
// in MAP, we perform OPERATIONS but in FILTER, we check only TRUE or FALSE
num2= array.map((n) => n*20).map((n) => n+20).filter((n) => n>=50).map((n) => n-10)
console.log(num2);


