const arr = [1,2,3,4,'raj bahi']
console.log("a: ",arr)
const newarr = new Array(1,2,3,'raj bhai')
// console.log(newarr);

//difference btween const arr = new Array() and const arr = []
//the main difference is you can set the size of array in new Array() syntax
//lets take a example

const myarr1 = [4]
const myarr2 = new Array(4);
console.log(myarr1===myarr2) //this gives false
console.log(myarr1.length,"and",myarr2.length) //myarr1 gives 1 and myarr2 gives 4


//difference between in slice and splice
// console.log(arr.slice(1,4))
// console.log("b: ",arr)

// console.log(arr.splice(1,4))
// console.log("C: ",arr)

// main difference is between slice and splice is that by splice the main array is changed

const copy = arr;
console.log(copy)
console.log(arr)

copy.pop()
console.log(copy)
console.log(arr)
//as you can ceraly see that array make a shallow copy it means they share reference 