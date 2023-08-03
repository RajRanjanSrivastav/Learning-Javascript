let name = "raj ranjan srivastav"
console.log(`hello how are you ${name}`);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.indexOf('r'));

//substring method can not work on neagative value
const sirname = name.substring(11,14)
// console.log(sirname);


//slice method can include negative value
const anotherString = name.slice(-9,15)
// console.log(anotherString);

//trim method remove the extra space from start and end
const newString = ' raj ranjan     srivastav   '
// console.log(newString)
// console.log(newString.trim())

//replace method 
console.log(newString.replace('j','a'))
console.log(newString.includes('0 '));

console.log(name.concat(newString));