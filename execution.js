// JAVASCRIPT EXECUTION CONTEXT  
// MOST IMPORTANT CONCEPT FOR INTERVIEW PERSPECTIVE
// how javascript run files 
// 1-GLOBAL EC      2-Functional EC     3-Eval EC
// 1-Global phase (THIS) 2-Memory Creation phase  3-Execution phase
let a=4
let b=7
function add(n1,n2){
    let result=n1 + n2
    return result
}
let result1=add(3,4)
console.log(result1); //7
let result2=add(a,b)
console.log(result2); //11
 
// WHEN FUNCTION IS IN EXECUTION PHASE, there a new environment will be created where Variable Environment + Execution Thread will place
// Again two phases will happen 1- memory creation phase  2- execution phase
// Result will then go to Global phase

// Now we'll check this in google console
