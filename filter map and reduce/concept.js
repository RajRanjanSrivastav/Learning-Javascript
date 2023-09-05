const arr=[1,2,3,6,7]

// let ans = arr.filter( (val) => {return val>5} )
// // let ans = arr.filter( (val) => val>5 ) // here don't need to write return keyword 
// console.log(ans)


// let mpans = arr.map((val)=> val+4)  //here it send result in boolean
// console.log(mpans)

//chaining method
//in this approach you can add many method one by one as needed

// let chainans = arr.map((val)=>val+1).map((val)=>val*2).filter((val)=>val>11)
// console.log(chainans)


//reduce method  -----> This method a accumulator concept is given

// let ans = arr.reduce((acc,item) => acc+item,0)
// console.log(ans)

const obj = [
    {
    item:'car',
    price:2500
    },
    {
    item:'car',
    price:2500
    },
    {
    item:'car',
    price:2500
    }
]

let ans = obj.reduce((acc,item)=>acc+item.price,0)
console.log(ans)