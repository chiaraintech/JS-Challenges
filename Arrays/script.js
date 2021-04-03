'use strict';
//Array methods: simply methods which are accessible to arrays, and objects.
//Arrays are objects which get access to special built-in methods.
let arr = ['a', 'b', 'c', 'd', 'e'];

/////////////---SLICE----//////////
//You can extract part of any array without changing the original one.
//It returns a copy of the array just with the extracted parts.
//First number is starting parameter, the second one is the last.
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));

//We can also use the method to create a shallow copy of the array.
console.log(arr.slice());
//Same result if I use the spread operator:
console.log([...arr]);



/////////////---SPLICE----//////////
//It works almost in the same way as slice.
//Fundamental difference: it does mutate the original array.
//After I splice an array, if I look at the original array, it'll be modified.
console.log(arr.splice(2));
arr.splice(-1); //Common use: remove last element.
console.log(arr);


/////////////---REVERSE----//////////
//Reverse mutates the original array.
let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['f', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2)


/////////////---CONCAT----//////////
//Used to concatenate two arrays.
const letters = arr1.concat(arr2)
console.log(letters)
//Same result if I use the spread operator:
console.log([...arr1, ...arr2]);


/////////////---Join----//////////
//If I want to join strings with a separator of my choice.
console.log(letters.join('-'))