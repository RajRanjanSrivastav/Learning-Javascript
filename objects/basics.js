// let car = {
//     color:"blackish",
//     model:"20203",
//     name:"loura"
// }
// console.log(car);
// console.log(car["color"]);
// console.log(car.color);

// modify the object property
// car.color = "brown";
// console.log(car);

// delete 
// delete car["color"];
// console.log(car);

// when a function is called in context of object then it call as method

// let person = {
//     ageCalculate : function(birthyear=2006)
//     {
//         let age = 2023-birthyear;
//         return age;
//     }
// }

// console.log(person.ageCalculate(2000));

// for each loop
// dishes = ["rice","chawal","roti","dall"]
// dishes.forEach(function(element){
//     console.log(element);
// });

// -------------------------------------------

// call and apply method

// let airline={
//     flightname:"indigo",
//     iatcode:"ID",
//     bookings:[],
//     book: function(flightcode,name)
//     {
//         console.log(`${name} Booked flight on ${this.flightname} with flight number ${this.iatcode}${flightcode}`);
//         this.bookings.push({flightname:`${this.flightname}`,planecode:`${this.iatcode}${flightcode}`, name:`${name}`})
//     }
// }
// airline.book(566,"punit");
// console.log(airline);

// new airline launched
// let jet = {
//     flightname:"private jet",
//     iatcode:"PV",
//     bookings:[],
// }
// let book = airline.book;
// book.call(jet,565,"raj");
// console.log(jet);


// pass by reference and pass by value
let arr = [1,2,4,5,6];
let getref = arr;
getref[6]= 45;
console.log(arr);
console.log(getref);

console.log("..............");
let getval = [...arr];
getval[5]= -110;
console.log(arr);
console.log(getval);