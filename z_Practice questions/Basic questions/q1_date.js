// write a javascript program to display date in a particular format
"use strict";

let date = new Date();

const todayDay = () => {
    let day = date.getDay();
    return day;
};

const curnTime = () => {
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if(hh >= 12)
    {
        hh = (hh-12)+" PM";
    }
    else{
        hh = hh+"AM";
    }

    let time = hh+" "+ mm+" "+ss;
    return time;
};

console.log(`Today is : ${todayDay()}`);
console.log(`Current time is : ${curnTime()}`);
