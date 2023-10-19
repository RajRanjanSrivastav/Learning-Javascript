// calculate days left for diwali
let data = new Date(2023,10,23);
let today = new Date();
let oneDay = 24*60*60*1000;
console.log(Math.ceil((data.getTime()-today.getTime())/oneDay))