//Array Part  (25-04-2026)
let myArr= ["arfa" , "ayesha","sania" , 23, true]
console.log(myArr);
console.log(myArr.includes("arfa")); // here it will be true
console.log(typeof myArr); // it's type will be  object
// So basically an ARRAY is collection of items in single variable
// Array is resizeable and can contain different datatypes
// Some Array Methods
//++++++++++++++ PUSH METHOD +++++++++++++++++++++++++++ (to add elements in an array)
myArr.push("Mehak Dastageer")
myArr.push("Khawaja Yousaf")
myArr.push(22,33,44) // we can add elements collectively too
console.log(myArr);
//++++++++++++++ POP METHOD +++++++++++++++++++++++++++ (will remove the last element of an array)
myArr.pop()
myArr.pop()
myArr.pop() //we popped 3 elements so the last 3 elements will be removed from an array
console.log(myArr);
//++++++++++++++ UNSHIFT METHOD +++++++++++++++++++++++++++ (will add that element in start of an array)
myArr.unshift(624)
console.log(myArr);
//++++++++++++++ SHIFT METHOD +++++++++++++++++++++++++++ (will remove that element in start of an array)
myArr.shift(624)
myArr.shift() // if we don't give value here then it will remove the 1st element of an array
console.log(myArr)
//++++++++++++++ JOIN METHOD +++++++++++++++++++++++++++ (will convert an array into string )
let otherArray= myArr.join()
console.log(otherArray);
console.log(typeof otherArray); // now it's type will be string

//  ++++++++++++++ QUESTIONS ++++++++++++++++++++++
console.log(myArr.includes("arfa"));
console.log(myArr.includes("masooma")); // answer will come in boolean format
console.log(myArr.indexOf ("masooma")); // answer will be -1 if we don't  have this value in an array
console.log(myArr.indexOf ("sania")); // answer will be index of that no. if we have this value in array

// SLICE VS SPLICE
// +++++++++++++++++++++ SLICE +++++++++++++++++++++++++++++++++++++++
//  SLICE METHOD doesn't change the orignal array and start from the index that we gave 1st and doesn't include the index that we gave in end
let anotherArr= [0,1,2,3,4,5,6,7,8]
console.log(anotherArr.slice(1,4)) // answer will be 1,2,3
console.log(anotherArr); // will return the orignal array without changing it

// +++++++++++++++++++++ SPLICE +++++++++++++++++++++++++++++++++++++++
//  SPLICE METHOD  change the orignal array and start from the index that we gave 1st and will remove all the indexes ttill we get the index that we gave in last
console.log(anotherArr.splice(1,4)) // answer will be 1,2,3,4
console.log(anotherArr); // 0,5,6,7,8

