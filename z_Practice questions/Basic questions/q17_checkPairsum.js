const pairSum = (a,b) =>{
    if( a==50 || b==50 || (a+b) == 50 )
    {
        console.log("true");
    }
    else{
        console.log("false");
    }
}

pairSum(40,10); //true
pairSum(20,50); //true
pairSum(60,20); //false