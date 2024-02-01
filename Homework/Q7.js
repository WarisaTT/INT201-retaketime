// 7. // Objects Instruction: 

// - Create an object person with properties: name (a string), age (a number), and isStudent (a boolean).

// 7.1 Add a new property hobbies, an array of strings, to the person object.

// 7.2 Change the age property to a new value.

// 7.3 Delete the isStudent property.

// Initiate code:

// // Insert your code here


// - Create an object person with properties: name (a string), age (a number), and isStudent (a boolean).
let person = {
    name: 'Warisa',
    age: 21,
    isStudent: true 
}
// 7.1 Add a new property hobbies, an array of strings, to the person object.
person.hobbies = ['Volleyball','chairball','football']

// 7.2 Change the age property to a new value.
person.age = 12

// 7.3 Delete the isStudent property.
delete person.isStudent

//display person object
console.log(person)