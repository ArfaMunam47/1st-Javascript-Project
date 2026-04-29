// ---------------------- FUNCTION ------------------------
function name(){
    console.log("Arfa");
    console.log("is");
    console.log("good");
    console.log("at");
    console.log("writing");
    console.log("stories");
}
name() //function call
//------------------------ ADDITION--------------------------
function addTwoNumbers(num1,num2){ //parameters
    console.log(num1 + num2);
    
}
addTwoNumbers(66,22)//arguments


//------------------------ SUBTRACTION--------------------------
function subTwoNumbers(num1,num2){
    let sub= num1 - num2
    return sub
}
sub=subTwoNumbers(66,22)
console.log("Subtraction: ",sub);

//------------------------ MULTIPLICATION--------------------------
function mulTwoNumbers(num1,num2){
    return num1 * num2
}
mul=mulTwoNumbers(66,22)
console.log("Multiplication: ",mul);
//------------------------ DIVISION--------------------------
function divTwoNumbers(num1,num2){
let div= num1 /num2
return div
}
div=divTwoNumbers(66,22)
console.log("Division: ",div);

//------------------------ REMAINDER--------------------------
function remTwoNumbers(num1,num2){
    return num1 % num2
}
rem=remTwoNumbers(661,22)
console.log("Remainder: ",rem);

function loginUserInfo(username = 'Mehak Dastageer'){ //so we'll never get undefined value
    // if(username=== undefined){
    //     console.log("Please enter your username");
    //     return
        
    // }
        if(!username){
        console.log("Please enter your valid username");
return
//nothing will be print after once you write return
        
    }
    
    return ` ${username} just logged in`
}
console.log(loginUserInfo("Wajeeha"));
console.log(loginUserInfo("Abubakar Shahbaz"));
console.log(loginUserInfo("")); //just logged in
//  "" & undefined ara  both considered as false in JS code
console.log(loginUserInfo()); //undefined just logged in

// ______________________ FUNCTION PART 2 __________________________________
//____________________________ REST OPERATOR _______________________________
// Rest operator and Spread operator work similarly in JS 
function addNumbers(...num1){ // now this will give us all no. in compact form 
    return num1
}
console.log(addNumbers(200,300,400,500,600));

function countNumbers(val1,val2,...num1){ // now this will give us all the rest no. except value 1 and value 2
    return num1
}
console.log(countNumbers(200,300,400,500,600)); //400,500,600
//_______________ OBJECTS IN FUNCTION ________________________
let obj={
    name:"Sania Safdar",
    age:21
}
function handleobj(obj){
    if(obj.name==="Sania Safdar"){
        console.log("I don't like her");
        return //so that nothing prints after this statement
        
    }
    console.log(`My best friend name is ${obj.name} and her age is ${obj.age}.`);
    
}
// handleobj(obj)
handleobj({ //we can also give the whole object in console.log statement
    name:"Sania Safdar",
    age:21
})
//_______________ ARRAY IN FUNCTION ________________________
let array=[200,"Ayesha",false,700]
function handleArray(array){
    return array
}
console.log(handleArray(array));
console.log(handleArray(array[0]));
console.log(handleArray(array[3]));


