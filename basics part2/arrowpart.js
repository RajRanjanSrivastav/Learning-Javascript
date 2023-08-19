// console.log(this)

const user = {
    name:"raj ranjan srivastav",
    id:34,
    welcome: function(){
        console.log(`Good afternoon Mr.${this.name}`)
        console.log(this)
    }
}
user.welcome()
user.name="shiva"
user.welcome()
console.log(this)

function call(){
    console.log(this)
}
call()