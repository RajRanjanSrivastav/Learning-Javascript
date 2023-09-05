const arr = [1,2,3,4,6]

for(const num of arr)
{
    // console.log(num)
}

const greeting = "hello world";
for (const greet of greeting)
{
    if(greet==" ")
    {
        // continue
        break
    }
    // console.log(greet)
}

//map store values in key-value pair and also remaimber the order of inseration and also have unique value always.

const map = new Map()
map.set('In',"India")
map.set('En',"England")

// for of

// for (const [key,value] of map) {
//     console.log(key+"-->"+value)
// }

const myobj = {
    name : "raj ranjan srivastav",
    id : 45,
    course : "javascript"
}

// for (const key of myobj) {
//     console.log(key)
// }   //does't works 


//for in loop

for (const key in myobj) {
    console.log(`${key} relation ${myobj[key]}`)
}

//for each
// myobj.forEach(function(val){
//     console.log(val)
// }) //not works on object directly it can works on array of object

// arr.forEach(function(val){
//     console.log(val)
// })


const arrobj = [
    {
        name: 'raj ranjan srivastav',
        id:'32'
    },
    {
        name: 'raj ranjan srivastav',
        id:'32'
    },
    {
        name: 'raj ranjan srivastav',
        id:'32'
    },
    {
        name: 'raj ranjan srivastav',
        id:'32'
    }
]

arrobj.forEach((val,ind,arr)=>{
console.log(val,ind,arr)
})