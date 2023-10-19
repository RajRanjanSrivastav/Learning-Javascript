// convert temperature celsius to fahrenheit
// formula c/5 = (f-32)/9
// c = (f-32)*(5/9)
// f = 41c/5

let c = 60;
let f = 45;

const convertF_to_C = (f) =>{
   console.log((f-32)*(5/9));
}

const convertC_to_F = () =>{
    console.log((c)*(9/5)+32);
  
}

convertC_to_F(c);
convertF_to_C(f);