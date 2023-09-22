"use strict";
// new Promise(()=>{})
// new Promise(function(){})
Object.defineProperty(exports, "__esModule", { value: true });
var a = 20;
var promiseOne = new Promise(function (resolve, reject) {
    if (a > 10) {
        resolve("I am a good girl"); //anything passed to resolve becomes available in then
    }
    else {
        reject(10); //anything passed to reject becomes available in catch
    }
});
promiseOne.then(function (a) {
    console.log(a);
}).catch(function (b) {
    console.log(b);
});
function Wada_e_wafa(neharpeaaya) {
    return new Promise(function (resolve, reject) {
        if (neharpeaaya === "true") {
            resolve("wada pura hogeya");
        }
        else {
            reject("dil toot geya");
        }
    });
}
Wada_e_wafa("false").then(function (a) {
    console.log(a);
    return "Then block has run I am then2";
}).then(function (c) {
    console.log(c);
    return "I will be run by then 3.";
}).then(function (d) {
    console.log(d);
}).catch(function (b) {
    console.log(b);
    return "I am returned by catch";
}).catch(function (r) { console.log(r); });
/*function (parameter){
    //function body
}*/
/*(parameter)=>{
    //function body
}*/
