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


//3a.Higher-order functions accepting other functions.
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


//3b.Higher-order functions returning functions. Important in functional programming.
const greet = function(greeting) {
    return function(name){                              //this func returns another function
        console.log(`${greeting} ${name}`)
    }
}
const greeterHey = greet('Hey');        
greeterHey('Chiara');
greeterHey('Dylan');
greet('Hello')('Martha');                        

//rewrite only with arrow functions
const arrowGreet = greeting => name => {console.log(`${greeting} ${name}`)}
arrowGreet('Good morning')('Emma');


//4a. The call method.
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNumber, passengerName){
        console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNumber}`);
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, passengerName})
    }
}
//The this keyword points to the lufthansa object itself because that's the object on which the book method was called.
lufthansa.book(123, 'Chiara');
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}
//Call, apply and bind enable me to point the 'this' keyword to where I want it to.
//We call the 'CALL' method, which will call the book method, passing the params I need.
//Manually and explicitely I can set the this keyword of any function that we want to call.
const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams') //first param is WHERE I want to call it. Even if the actual code is inside the lufthansa object, we can point it outside.
console.log(eurowings);
book.call(lufthansa, 33, 'Mary Cooper'); //We set the this keyword inside of function call of lufthansa, it is now back to pointing to Lufthansa.
console.log(lufthansa);

//4b. The apply method.
//The only difference from 'CALL' is that 'APPLY' does not receive a list of arguments after the this keyword, but instead it's gonna take an array of arguments.
const flightData = [359, 'Geroge Cooper'];
book.apply(lufthansa, flightData);
//With ES6, we use the spread operator.
book.call(eurowings, ...flightData);


//5. The bind method.
//Like the call method, bind allows us to manually set this keyword for any function call.
//Bind does not immediately call the function, but it returns a new function where this keyword is set.,
lufthansa.planes = 400;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)
//Proof that the this keyword is set dynamically.
//In an eventListener, the this keyword refers to the object it's attached to.