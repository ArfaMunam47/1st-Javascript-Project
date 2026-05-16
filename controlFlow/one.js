// ControlFlow  ........Logic Flow
// ------------------------- IF
// if(condition){

// }else{

// }   //------syntx
if(true){
    console.log("This will be shown in terminal because the condition is true");
    
}
if(false){
    console.log("This will not get printed");
    
}
if( 2 == "2"){
    console.log("This will not check the datatype");
    
}
if( 2 != "2"){
    console.log("This will not check the datatype");
    
}
console.log("The above statement is false so this console will be printed");
// == , != , < , > , === , !==, <= ,>=
if ("2" === "2"){
    console.log(`Will check the datatype`);
    
}
console.log('This will also printed because JS will treat it as separate line of code');
const isUserLoggedIn = true
const temperature = 50
if(temperature > 60){
    console.log("Temperature is greater than 60");
    
} else{
    console.log("Temperature is less than 60");
    
}
if (isUserLoggedIn !== false){
    console.log(`This check strictly not equal to`);
    
}
console.log(`Hello world. just did some random work`);

//16-05-2026
//Scope Concept
const score = 200
if(score > 100){
    const power= "Flying"
    console.log(`User's Power : ${power}`);
    
}
//  console.log(`User's Power : ${power}`); will give us error here
const balance = 1000
if(balance > 500) console.log("Balance is greater than 500");
// if(balance > 500) console.log("Balance is greater than 500"), console.log("And this is not prefferable practice"); not a good practice 

//---------------------- NESTED IF ---------------------
if(balance<500){
console.log("Blance is less than 500");

}else if(balance < 750){
    console.log("Blance is less than 750");
}else if(balance < 950){
    console.log("Blance is less than 950");
}
else{
    console.log("Balance is less than 1200");
    
}

const userLoggedIn= true
const usedDebitCard= true
const loggedInFromGoogle= true
const loggedInFromEmail= false
if(userLoggedIn && usedDebitCard && 2==="2"){
    console.log("Allow them shopping");
    
}
else{
    console.log("Don't allow them shopping");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User just logged in");
    
}




