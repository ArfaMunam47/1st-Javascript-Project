// 24-05-2026
let array=[0,1,2,3,4,5,6,7,8,9,10]
let num= array.forEach( (item) =>{
    // console.log(item);
    return item
    
})
console.log(num); //undefined
// FOR EACH LOOP don't return values
// FILTER CONCEPT
// let num2= array.filter((item) => item>=5)
// let num2= array.filter((item) => (item>=5))
let num2= array.filter((item) => {
    return item>=5
})
console.log(num2); //filter return values, it is also a call back function 

// To make FOR EACH LOOP return VALUES
let newArr=[]
let num3=array.forEach((item)=>{
if(item>=5)
    newArr.push(item)
})
console.log(newArr);
//  BOOK EXAMPLE
let book=[
    {
        Title:"Book-One",
        Publish: 1980,
        Genre:'Fiction',
    },
    {
        Title:"Book-Two",
        Publish: 1990,
        Genre:'Non-Fiction',
    },
    {
        Title:"Book-Three",
        Publish: 1480,
        Genre:'Fiction',
    },
    {
        Title:"Book-Four",
        Publish: 1986,
        Genre:'History',
    },
    {
        Title:"Book-Five",
        Publish: 1880,
        Genre:'Statistics',
    },
    {
        Title:"Book-Six",
        Publish: 1989,
        Genre:'Fiction',
    },
    {
        Title:"Book-Seven",
        Publish: 1960,
        Genre:'Fiction',
    },
    {
        Title:"Book-Eight",
        Publish: 2001,
        Genre:'Non-Fiction',
    },
    {
        Title:"Book-Nine",
        Publish: 2000,
        Genre:'Fiction',
    },
    {
        Title:"Book-Ten",
        Publish: 1999,
        Genre:'Mathematics',
    },
]
book.forEach((bk) =>{
    console.log(bk);
    
})
let num4= book.filter((bk) => bk.Publish === 1980)
console.log(num4);
num4= book.filter((bk) => bk.Genre === 'Non-Fiction')
console.log(num4);
num4= book.filter((bk) => bk.Publish >=1990 && bk.Genre=== 'Fiction')
console.log(num4);





