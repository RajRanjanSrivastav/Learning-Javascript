// console.log(this)

// const user = {
//     name:"raj ranjan srivastav",
//     id:34,
//     welcome: function(){
//         console.log(`Good afternoon Mr.${this.name}`)
//         console.log(this)
//     }
// }
// user.welcome()
// user.name="shiva"
// user.welcome()
// console.log(this)

// function call(){
//     console.log(this)
// }
// call()


// const myfun = (a,b) => {
//     return a+b;
// }

// const myfun = (a,b) => a+b

// const myfun = (a,b) => (a+b)

// const myfun =(a,b) =>({username:"raj ranjan srivastav"})

// console.log(myfun(5,8))

//IIEF

const sirname = "lala"
console.log(sirname);
(function chai(){
    const name = "raj ranjan srivastav"
    console.log(`connected to ${name} ${sirname}`)
})();

// in this fucntion if we not include semicolon; then it throw error because compiler excute the fuction but not know where to close so must include semicolon;

(() => {
    console.log(`connected ${sirname}`)
})()