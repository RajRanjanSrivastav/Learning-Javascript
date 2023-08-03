let counter = 1;
const name = "raj"
city = "lucknow"

// name="lala"    // value of const can't be changed after declaration
// console.table([counter, name, city]);


// data conversion

let cnt = "33bh";
// console.log(typeof(cnt))
let change = Number(cnt);
// console.log(typeof(change));
// console.log(change)

// console.log(2**4)

// postfix increment
let a = 5
let b = a++;
// console.log(b);
// console.log(a);

//prefix increment
a=5
b=++a
// console.log(b);
// console.log(a);


//data types
/*
  primitive datatypes
 1: number
 2: bigint
 3: string
 4: boolean
 5: null
 6: symbol
 7: undefined

 non-primitive dataypes
 object
 array
 date
*/
 
let number = 3434343
let bignumber = 1234567887654334567890n  //if number is greater than 2^53 then use n at last and javascript consider it as bignumber
let naam = "raj ranjan srivastav"
let id = Symbol(234)
let accid = Symbol(234)
console.log(id===accid);  // === is strict way to comapare the datatypes


let car = ['bmw','honda']
console.log(typeof car);

let add= {
   vill: "bardand",
   city: "khalilabad"
}
console.log(typeof add);
