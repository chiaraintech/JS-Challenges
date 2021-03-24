'use strict';
//ES5, we'd use short circuiting. ES6 we assign the default values in the parameters (can also be calculations).
//However we can't skip a default parameter when calling the function unless you set it to undefined.

//1. Default parameters.
const bookingArray = [];
const createBooking = function(flightNum, numPassengers = 1, price = 200) {
        const booking = {
            flightNum,
            numPassengers,
            price
        }
    console.log(booking);
    bookingArray.push(booking);
}

createBooking('LH123', 4, 190);

//2. How passing arguments work (value VS reference)
const flight = 'JFK345'
const chiara = {
    name: 'Chiara',
    passport: 789445
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LAX890';
    passenger.name = 'Miss. ' + passenger.name;
    //if (passenger.passport === 789445) { alert ('check in.')} else { alert('wrong passport')};
}
checkIn(flight, chiara);        
//flight is a primitive type. the parameter contains a copy of the original value.
//when we pass a reference type to a function, what is copied is a reference to the obj in memory.
//when we pass an obj to a function, we copy the object.

const newPassport = function(person) {
    person.passport = Math.random() * 100000;
}
newPassport(chiara);
checkIn(flight, chiara);
//We have two functions manipulating the same object, so prone to errors.

//3.Higher-order functions.

const oneWord = function(string) {
    return string.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(string) {
    const [firstWord, ...others] = string.split(' ');
    return [firstWord.toUpperCase(), ...others].join(' ');
}
const transform = function(string, func) {
    console.log(`Original string: ${string}`);
    console.log(`Transformed string: ${func(string)}`);
    console.log(`Transformed by: ${func.name}`);
}
transform('Javascript is the best!', upperFirstWord);