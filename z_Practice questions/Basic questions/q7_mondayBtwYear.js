"use strict"

let y1 = 2024;
let y2 = 2030;

for(let i=y1; i<=y2 ;i++)
{
    let data = new Date(i,0,1);
    // console.log(data.getDay()+" outside " + data)

    if(data.getDay()===1)
    {
        // console.log(data.getDay()+" inside ")
        console.log(`${i} year have Moday on 1 january` );
    }
}


