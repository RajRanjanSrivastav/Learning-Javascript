// const promiseOne = new Promise(function (resolve, reject) {
//     //do async task
//     setTimeout(function(){
//         console.log("async task completed");
//         resolve()
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("promise commit")
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task2 completed");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("task2 resolved")
// })


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"raj ranjan srivastav", email:"srivastavrajranjan75@gmail.com"});
    },1000);
})

promiseThree.then(function(user){
    console.log(user)
});


//chaining

const promiseFour = new Promise((resolve,reject)=>{
    let error = true;
    setTimeout(()=>{
        if(!error)
        {
            resolve({name:"raju",email:"lala@gmail.com"})
        }
        else{
            reject("something went wrong!");
        }
    },1000)
})

promiseFour
.then(function(user){
    return user.name;
})
.then((name)=>{
console.log(name)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("kuch to hogya")
})

async function promisefive(){
    try {
        const response = await fetch("https://random-data-api.com/api/address/random_address");
        // console.log(response);
        const data =  await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
   
}
promisefive();