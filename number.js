// There will be two portion here 1--Number  2--Math
// we discussed some methods like toString toLocaleString toPrecision toFixed
const score = 400
console.log(score);
const number= new Number(600)
console.log(number)
// Methods of number 1-toString 2-toPrecision 3-toFixed 4-toLocaleString

console.log(number.toString())
console.log(number.toString().length)
console.log(number.toFixed(3)) //three numbers will come after decimal if we haven't give any decimal no then 3 0 will come after point
// ********** Precision is most commonly used method
const newNumber=234.567
console.log(newNumber.toPrecision(3))// it will automatically round off and give 3 no. as total
console.log(newNumber.toPrecision(4))
console.log(newNumber.toPrecision(2))//extra no. before decimal will appear as exponent
const hundreds=10000000000000
console.log(hundreds.toLocaleString())// this will follow US standard
console.log(hundreds.toLocaleString('en-IN'))// this will follow Indian standard
console.log(hundreds.toLocaleString('en-PK'))// this will follow Pakistan's standard


// ***************** JS is case sensitive language **************//
// ++++++++++++++++++ Math +++++++++++++++++++++++++++//
console.log(Math)// it has many properties
// we'll discuss methods like 1-abs 2-round 3-ceil 4-floor 5-min 6-max 7-sqrt 8-sin 9-pow 10-random
console.log(Math.abs(-5))//this will convert -ve to +ve sign just and its mean absolute value
console.log(Math.abs(5))//+ve sign will not change
console.log(Math.round(345.67))//round off (++++ most commonly used method +++++)
console.log(Math.ceil(234.34))//this will give bigger value
console.log(Math.floor(234.74))//this will give smaller value
console.log(Math.sqrt(33))//square root
console.log(Math.pow(33,2))//we'll give exponent and base here
console.log(Math.min(33,77,-98,0,67,345,890,-789))// this will give minimum value
console.log(Math.max(33,77,-98,0,67,345,890,-789))// this will give maximum value
console.log(Math.sin(30))
//  ************ Random() method (most commonly used) **************//
console.log(Math.random()) // wil give random no. b/w  0 and 1
console.log(Math.random()*10) //to get no. greater than 0
console.log(Math.random()*10 + 1) //to absolutely get no. greater than 0
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)
//************ give ur own range of numbers **********/
const max= 50
const min=30
console.log((Math.random()* (max-min +1)) + min)
console.log(Math.floor(Math.random()* (max-min +1)) + min)// to take only one no.