const arr = [1,2,3,4,'raj bahi']
console.log("a: ",arr)
const newarr = new Array(1,2,3,'raj bhai')
// console.log(newarr);


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