let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

let time = function(){
    let curn = new Date();

    let ht = curn.getHours();
    let mt = curn.getMinutes();
    let st = curn.getSeconds();

   
    
    hour.innerText = ht;
    min.innerText = mt;
    sec.innerText = st;
}

setInterval(time,1000);

// storage

console.log(localStorage)
localStorage.setItem("car","bmw");
// console.log(localStorage)
localStorage.setItem("price",655)
// get items
console.log(localStorage.getItem("price"))

//update items
localStorage.setItem("car","thar")

// remove items
localStorage.removeItem("car")

let gadi = [
    {"bmw":700, "price":"88L"},
    {"thar":2023,"price":"18L"}
]
console.log(gadi)
// console.log(localStorage.setItem("gadi",gadi)) //gives undefined
localStorage.setItem("gadi",gadi);
let gadistr = JSON.stringify(gadi); //object to string
console.log(typeof gadistr)
localStorage.setItem("gadi",gadistr)

console.log(localStorage.getItem("gadi"))

// for get it into object form
let gadiobj =  JSON.parse(localStorage.getItem("gadi"))
console.log(gadiobj)
