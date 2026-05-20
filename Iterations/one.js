// 19-05-2026 WORK
// FOR LOOP 
//  Loop (Iterations)
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}
// console.log(element); //will give us error because of scope which is not accessible outside the  braces
// CTRL D (for selecting and renaming name appearing in multiple locations)
for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop : ${i}`);
    for (let j = 0; j < 7; j++) {
       console.log(`Outer loop : ${i} and Inner loop : ${j}`);      
    }
  
}

// Checking multiplication here
for (let i = 10; i <= 10; i++) {
    // console.log(i);
    
    console.log(`Outer loop : ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`Outer loop : ${i} and Inner loop : ${j}`);  
console.log(i + '*' + j + '=' + i * j);
   } 
}
//  PRINTING ALL TABLES
for (let i = 1; i <=10 ; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i +'*'+ j + '=' + i * j);    
        
    } 
}
//  ARRAY CONCEPT IN LOOP
let myArr=["arfa", "nisha", "tayba","ayesha"]
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
    
    
}
//Break and Continue CONCEPT
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        // break //will stop printing next numbers
        continue //will print next numbers but in place of 5, it will print the statement that we give 
        
    }
   console.log(`Value of i is ${i}`);
   
    
}