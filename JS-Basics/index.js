
let name = 'Sandip'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean literal
let firstName; // undefined
let lastName = undefined; // undefined
let middleName = null; // null

// OBJECTS
let person = {
    name: 'Sandip',
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Mary';

console.log(person.name);



// ARRAYS
let selectedColors = ['red', 'blue']
selectedColors[2] = 'green'
slectedColors[3] = 1;
console.log(selectedColors);


// FUNCTIONS a) Performing a task
function greet(name, lastName) {
    console.log('Hey! ' + name + ' ' + lastName);
}

greet('John');
greet('Mary');

// FUNCTIONS b) Calculating a value
function square(numbers) {
    return number * numbers;
}

console.log(square(5));

// Can't be a reserved keyword
// Should be meaningful
// Can't start with a number (1name)
// Can't contain a space or hypen (-) it should be like firstName
// Are case-sensitive i.e firstName and FirstName are diff variables

