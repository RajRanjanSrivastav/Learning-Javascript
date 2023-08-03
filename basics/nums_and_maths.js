const num = 100000.78994;
// console.log(num);
const newNum = new Number(num)  //difining in object and get some properties 
// console.log(newNum.toFixed(2))  //we can use it to show how many place after decimals
// console.log(newNum.toLocaleString('en-In')) //convert into local string
// console.log(typeof newNum.toString()); //convert into string


//Math

// console.log(Math)
// console.log((Math.random()*10)) //gives value in range 0 to 9
// console.log((Math.random()*10) + 1)  //gives value in range 1 to 9
// console.log(Math.floor(Math.random()*10)+1)  //Math.floor is used for avoiding decimal places
// console.log(Math.round(2.265))  //this round the value

//if we want to a random value in a particular range
let min = 10
let max = 30;
console.log(Math.floor(Math.random()*(max-min))+min)

