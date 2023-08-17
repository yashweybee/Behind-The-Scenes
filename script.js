'use strict';

// Coding Challenge
// const arr = [17, 21, 23]
// const arr2 = [12, 5, -5, 0, 4]

// function printForeCast(arr) {
//     for (const [i, value] of arr.entries())
//         console.log(`${value}ºC in ${i + 1} days`);
// }

// printForeCast(arr)
// printForeCast(arr2)

///////////////////////////////////////////////////////////////
// const firstName = "yash"
// console.log(calaAge(2002));
// function calaAge(year) {
//     let currentAge = 2023 - year

//     function doSomthing(){
//         if(true){
//             var isTrue = true;
//         }
//         console.log("work");
//         console.log(isTrue);
//     }
//     doSomthing()
//     return currentAge;
// }


// console.log(bool);

// var firstName = "Yash"
// let num = 2635
// const bool = true


// console.log(mul(20,20));

// function add(a , b){
//     return a+b
// }

// const sub = function(a,b){
//     return a - b
// }

// const mul = (a,b)=> a*b

// console.log(this);

// function age(year){
//     const age = 2023 - year;
//     console.log(this);
// }

// const fun = num=>{
//     const abc = 23;
//     console.log(this);
// }
// fun(34)
// age(2002)

// const person = {
//     fName: "Yash",
//     someFunction: function(){
//         return this.fName
//     }
// }

// const person2 = {
//     fName : "abcd"
// }

// person2.getName = person.someFunction;
// // console.log(person);
// // console.log(person2);
//  console.log(person2.getName());


// const person = {
//     fName: "Yash",
//     calcAge: function (bYear) {
//         const age = 2023 - bYear
//         // console.log(age);

//         // Method - 1
//         const self = this
//         const isAdult = function () {
//             console.log(self.fName);
//         }
//         isAdult()

//         // Method - 2
//         // const isAdult = ()=>{
//         //     console.log(this.fName);
//         // }
//         // isAdult()
//     },
//     someFunction: function () {
//         console.log(this);
//         console.log("caled");
//     },
//     greet: () => console.log(`hey ${this.fName}`)
// }
// person.someFunction()

// const me = {
//     name : "xys",
//     age: 21
// }
// const me2 = {
//     name : "abcd",
//     age: 22,
//     lastName: "qwert"
// }


// let friend = {};
// friend.name = "xyz"

// const newFriend = Object.assign(me2, me)
// // newFriend.name = "xyz"
// console.log(me);
// console.log(me2);
// console.log(newFriend);

// const original = {
//     a : 10,
//     b: "abcd",
//     c : {
//         fName:"xyz"
//     }
// }

// const copyObj = {...original}

// const deepObj = JSON.parse(JSON.stringify(original))
// deepObj.c.fName = "aaaaaaaaaaaaaaa"

// console.log(original);
// console.log(deepObj);


// const arr1 = [1, 2, 3, 4, [99,88]]

// const arr2 = arr1 //shallow
// const arr2 = JSON.parse(JSON.stringify(arr1)) //deep
// const arr2 = [...arr1]; //deep
// arr2[4][0] = 4444

// console.log('arr1' ,arr1);
// console.log('arr2',arr2);