// Dates
let myDate= new Date()
console.log(myDate);

console.log(myDate.getTime()); //this will give us values in mili seconds
// conversions
// toLocaleString() & toDateString is most commonly used
console.log(myDate.toString());
console.log(myDate.toDateString());//most commonly used
console.log(myDate.toLocaleString());// will give time too
// we can use more methods here  like
console.log(myDate.getMonth());
console.log(myDate.getMonth()+ 1);// so that end user don't get confuse
// Months start with 0 here 
let myCreatedDate= new Date(2028,4,5,7,5,6)//year month date time(hours/minutes/seconds)
let myNewDate= new Date(2028,4,5,17,5,6)//year month date time(hours/minutes/seconds)
console.log(myCreatedDate.toLocaleString());
console.log(myNewDate.toLocaleString());
//Js use 24  hours formate
let oldDate= new Date("1-5-2026")
console.log(oldDate.toDateString());
// when we do comparison we can get values of dates in seconds too
// here is the method of converting miliseconds to seconds
let SecDate= new Date()
console.log(SecDate);  //mili seconds
console.log(SecDate/1000);  //seconds
// to avoid decimals we can use math.floor method 
console.log(Math.floor(SecDate/1000));
let nowDate= Date.now()
console.log(nowDate);// it will give value in mili seconds
//toLocaleString is good because here we can give more customized dates as given
let anotherDate= new Date()
console.log(anotherDate.toLocaleString('default',
    {
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "numeric",
        minute:"2-digit",
        second:"numeric",
        timeZone:"Asia/Karachi"
    }
));
