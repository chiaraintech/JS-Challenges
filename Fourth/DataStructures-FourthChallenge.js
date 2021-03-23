// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  
  for (const [index, line] of lines.entries()) {             //I need both index and value from the entries.
      const [firstWord, secondWord] = line.trim().toLowerCase().split('_');
      const result = `${firstWord}${secondWord.replace(secondWord[0], secondWord[0].toUpperCase())}`;
      const paddedResult = result.padEnd(20);
      console.log(`${paddedResult}${'✅'.repeat(index)}`);
  }
});

//Beautify string
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const separatedFlights = flights.split('+');
for (const flight of separatedFlights) {
    const arrays = flight.split(';')
    const [type, fromWhere, toWhere, time] = arrays;
    const output = `${type.startsWith('_Delayed') ? 'LATE!' : ''}${type.replaceAll('_', ' ')} from ${fromWhere.slice(0, 3).toUpperCase()} to ${toWhere.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`
    console.log(output)
}
