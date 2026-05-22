// FOR-IN LOOP
// MAINLY USED IN OBJECTS
let obj={
    js: "Javascript",
    rb: "Ruby",
    cpp: "C++",
    html: "Hyper Text Markup Language",
    swift: "Swift by Apple"
}
for (const key in obj) {
//    console.log(key);// will print only key
//    console.log(obj[key]);// will print only key values
   console.log(`${key} stands for ${obj[key]}`);   
}
// CHECKING IN ARRAYS
let myArr=['ARFA','HAYAN','AYESHA','SEHAL']
for (const key in myArr) {
   console.log(key); //will print index starting from 0
   console.log(myArr[key]); //will give us values
   
}
// CHECKING IN MAP
const map= new Map()
map.set("a",1)
map.set("b",11)
map.set("c",111)
map.set("d",1111)
for (const key in map) {
console.log(key); // will not print anything

    
    
}
