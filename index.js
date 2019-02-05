// Stricted Equality
console.log(1 === 1);

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise
// they are a 'silver' customer.
let points = 120;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Logical AND (&&)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan);

// Falsy (false)
// undifined
/// null
// 0
// false
// ''
// NaN

// (Anything) !== Falsy = Truthy;
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND


/// Read, Write Execute
// 00000100
// 00000110
// 00000111

const readPremission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPremission | writePermission;
let message =
    (myPermission & readPremission) ? 'yes' : 'no';
console.log(message);


let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


/// If ... else && Switch and Case

// Hour
let hour = 19;
if (hour >= 6 && hour < 12) {
    console.log('Good morning!')
}
else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
}
else
    console.log('Good evenning');


// Switch case
// let role = 'guest';
// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator role');
//         break
//     default:
//         console.log('Unknown user');
// }
let role;
if (role === 'guest') console.log('Guest Looser');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');


// For
console.log('Hello World!');

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}

// While
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// Do while
let i = 9;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);


// For in
const person = {
    name: 'Mosh',
    age: 30
};
for (let key in person) console.log(key, person[key]);

const colors = ['red', 'green', 'blue' ];
for (let color of colors) console.log(color);
 

