// let car = function(color,model)
// {
//     this.color=color;
//     this.model=model;
// }
// console.log(car.prototype)

// // console.log(car);
// car.prototype.price=function()
// {
//     console.log('price hai 5k')
// }
// let result = new car('black','2023')
// let secon = new car('white',2024);
// console.log(result,secon)
// result.price()

//ES6 classes
//also see the get and set method
class Car{
    constructor(color,price)
    {
        this.rang = color;
        this.money = price;
    }
    startEngine()
    {
        console.log("paisha do tab chlane lo milega");
    }
    set changePrice(price)
    {
        this.money=price;
    }
    get tellPrice()
    {
        return `Price of your car is ${this.money}`
    }
}

let thar = new Car('black','18L');
console.log(thar)
thar.startEngine()
// thar.tellPrice
thar.changePrice="12L"
console.log(thar.tellPrice)
console.log(thar)