// new Promise(()=>{})
// new Promise(function(){})

import { resolve } from "path";

let a = 20;
let promiseOne = new Promise((resolve, reject) => {
    if (a > 10) {
        resolve("I am a good girl"); //anything passed to resolve becomes available in then
    }
    else {
        reject(10); //anything passed to reject becomes available in catch
    }
});

promiseOne.then((a) => {  //a here equals to "I am a good girl"
    console.log(a);
}).catch((b) => {
    console.log(b)
})



function Wada_e_wafa(neharpeaaya: string) {
    return new Promise((resolve, reject) => {
        if (neharpeaaya === "true") {
            resolve("wada pura hogeya");
        }
        else {
            reject("dil toot geya");
        }
    })
}

Wada_e_wafa("false").then((a) => {
    console.log(a);
    return "Then block has run I am then2"
}).then((c) => {
    console.log(c);
    return "I will be run by then 3."
}).then((d) => {
    console.log(d);
}).catch((b) => {
    console.log(b);
    return "I am returned by catch"
}).finally(()=>console.log("Finally the promise finished")) //This second catch is useless.



//the succeeding then() blocks will run provided the condition that the preceding then() block runs. However, catch() block is only one and only one catch block is run on rejection of promise.




/*function (parameter){
    //function body
}*/

/*(parameter)=>{
    //function body
}*/

