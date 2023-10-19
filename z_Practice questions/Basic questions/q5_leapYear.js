"use strict";

let year = 2024;


// function
const checkForLeap = (year) => {
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
};

checkForLeap(year);

