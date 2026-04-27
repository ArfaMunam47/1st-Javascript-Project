// OBJECT 2nd Part
//singleton object
const obj=new Object()
obj.name="Ayesha Mughal",
obj.email="ayesha001@gmail.com",
obj.password="123abc",
obj.isLoggedIn=false,
obj.lastLoginDays=["Sunday","Thursday"]
// console.log(obj);

//not a singleton object
const object={}
console.log(object); //will be empty because we didn't give values here

// ADD OBJECTS
let obj1={
    1: "a",
    2: "b"
}
let obj2={
    3: "c",
    4: "d"
}
let obj3={
    4: "e",
    6: "f"
}
let obj4={...obj1,...obj2,...obj3} //spread operator
let obj5={obj1,obj2,obj3} //wrong method
let obj6=Object.assign({},obj1,obj2,obj3) //here we give target first and then source '{}' are good to give so we can minimize errors
let obj7=Object.assign(obj1,obj2,obj3)  // here obj1 will be target now
console.log(obj4);
console.log(obj5);
console.log(obj6);
console.log(obj7);
console.log(obj1 ===obj7) //answer will be true here because now obj1 is target
// OBJECTS consisting of several objects and how to access them
const obj8={
    email:"arfamunam01@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Arfa",
            lastname:"Munam"
        }
    }
}
console.log(obj8.email);
console.log(obj8.fullname.userfullname.firstname); 
console.log(obj8.fullname?.userfullname.lastname);  //we can add '?' to avoid mistakes
// ARRAY  OF OBJECTS
let array=[
    {
        id:1,
        name:"arfa"
    },
     {
        id:2,
        name:"ayesha"
    },
     {
        id:3,
        name:"mehak"
    },
     {
        id:4,
        name:"masooma"
    }
] 
//to access them first we give index then we give what we want to access
console.log(array[0].name);//arfa
console.log(array[1].id);//2
console.log(array[2].name);//mehak
console.log(array[3].id);//4
console.log(obj);
//------------------- HAS OWN PROPERTY -------------------------
console.log(obj.hasOwnProperty('location')); //false
console.log(obj.hasOwnProperty('email')); //true
console.log(obj.hasOwnProperty('course')); //false
console.log(Object.keys(obj))// most important and will give us keys  in an array
console.log(Object.values(obj)) //will give us all the values of obj naming object
console.log(Object.entries(obj)) //will give all separate array




