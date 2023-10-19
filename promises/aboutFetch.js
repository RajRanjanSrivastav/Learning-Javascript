// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res)=>{
//  return res.json();
// // console.log(res);
// })
// .then((data)=>{
// console.log(data);
// })
// .catch((err)=>{
// console.log(err);
// })


// using promise asyn await

async function promiseFive(){
   try{
       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
       const data =  await res.json();
       console.log(data);
   }
   catch(error)
   {
     console.log("js went wrong");
   }
}
promiseFive();