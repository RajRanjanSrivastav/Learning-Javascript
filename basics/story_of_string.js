// let name = "raj ranjan srivastav"
// console.log(`hello how are you ${name}`);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.indexOf('r'));

//substring method can not work on neagative value
// const sirname = name.substring(11,14)
// console.log(sirname);


//slice method can include negative value
// const anotherString = name.slice(-9,15)
// console.log(anotherString);

//trim method remove the extra space from start and end
// const newString = ' raj ranjan     srivastav   '
// console.log(newString)
// console.log(newString.trim())

//replace method 
// console.log(newString.replace('j','a'))
// console.log(newString.includes('0 '));

// console.log(name.concat(newString));


// methods of string
let test = "Learning Javascript";


// 1 => length 
// console.log(test.length)

// 2 => slice()   //splice property does not exist in the string it exist in Array
// console.log(test.slice(0,7)) //last index is excluded.
// console.log(test);  //in original string there is no change

//3 => substring()
// console.log(test.substring(0,8));
// console.log(test.substring(0,));
// console.log(test.substring(0));
// console.log(test.substring(-2,-9)); //does not support negative indexing

// 4 => substr
// console.log(test.substr(4,8)); //print the values 8 length form index 4

// 5 => replace
// console.log(rest.replace('a','1')); //replace all a character with 1--> this is a case sensitive
// console.log(test.replace(/A/i,'1')); //replace all a, A character with 1 this is case insesitive


