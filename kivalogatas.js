"use strict";

// var, let, const
const szamok = [2, 4, 6,-7, -17, 5];

function kivalogatas(arr, tulFn) {
    const result=[];
    for (let i = 0; i < arr.length; i++){
        if (tulFn(arr[i])){
            result.push(arr.[i]);
        }
        return result;
    }

function negativE(p) {
    return p<0;
}

console.log(kivalogatas(szamok, negativE)); //nincs () a negativE után!!
console.log(kivalogatas(szamok, function negativE(p) {return p<0;}));

console.log(szamok.filter(negativE));

