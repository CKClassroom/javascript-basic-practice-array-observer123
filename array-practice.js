var people = ['Greg', 'Mary', 'Devon', 'James'];

// 1. Using a loop, iterate through this array and console.log all of the people.
people.forEach(function(element) { console.log(element); });

// 2. Write the command to remove "Greg" from the array.
people.shift();
console.log(people);


// 3. Write the command to remove "James" from the array.
people.pop();
console.log(people);

// let index = people.indexOf('James');
// if (index !== -1) {
//   people.splice(index3, 1);
// }

// 4. Write the command to add "Matt" to the front of the array.
people.unshift('Matt'); // ['Matt', 'Greg', Mary', 'Devon', 'James']
console.log(people);

// 5. Write the command to add your name to the end of the array.
people.push('Chad'); // ['Greg', Mary', 'Devon', 'James', 'Chad']
console.log(people);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (item of people) {
  if (item === 'Mary') break;
  console.log(item);
}

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let indexOfMaryAtPeople = people.indexOf('Mary');
let newPeople = people.slice(indexOfMaryAtPeople + 1);
console.log(newPeople);

// 8. Write the command that gives the indexOf where "Mary" is located.
people.indexOf('Mary');
console.log(people);

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
people.indexOf('Foo');
console.log(people);

// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
