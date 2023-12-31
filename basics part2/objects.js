//construct -----> singleton

//literals

//declaring symbol in object
const sym = Symbol("kya bhai");
const user = {
  name: "raj ranjan srivastav",
  email: "raj@google.com",
  id: 1,
  number: 7007500546,
  role: "Software developer",
  "dep id": 101,
  [sym]: "ha sab thick", //in this way you can declare a symbol in object
};

// console.log(user.email)
// console.log(user.dep id)                // can't access this properties in this way

// console.log(user["email"])             //best practice
// console.log(user["dep id"])


// console.log(user[sym])

//Object.freez   after this no modification can be done

// user["email"]="lala@company.com"
// console.log(user)

// Object.freeze(user)

// user["email"] = "mericompany.com"  //can't be modified
// console.log(user)


user.greeting = function(){
    console.log(`hey ${this.name} how are man`);
}

// console.log(user.greeting())

//advanced part
const tinder = {
  fullname:{
    fisrtname:"raj",
    lastname:"srivastav",
  },
  code:12
}
// console.log(tinder.fullname.fisrtname);   //declaring nested objects is possible


//destructuring objects

const {fullname:name} = tinder;
// console.log(name);

