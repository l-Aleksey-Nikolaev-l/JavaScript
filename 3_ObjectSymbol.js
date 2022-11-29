// Object with name USER
let user = {
    firstName: 'Aleksey',
    secondName: 'Nikolaev',
    userAge: 31,
    authorization: true,
    numbers: [12, 23 ,34],
    location: {
        country: 'Hungary',
        city: 'Budapest',
        street: 'Dandar',
        index: 1095
    }
};

// console.log(user.firstName);
// console.log(user['firstName']);
//
// console.log(user.numbers[2]);
// console.log(user.authorization);
//
//
user.authorization = false;
// console.log(user.authorization);


let arrayOfNumbers = [12, 23, 34, 45, 56, 67, 78, 89]; // Array it is an OBJECT!!!

// console.log(arrayOfNumbers[arrayOfNumbers.length - 1]);

let subUser = {
    firstName: 'Aleksey',
    secondName: 'Nikolaev',
    userAge: 31,
    [Symbol.for('password')]: 'qwerty12345',
    [Symbol.for('nickname')]: 'AN31'
};

console.log(Object.getOwnPropertySymbols(subUser));
// console.log(subUser[Symbol.for('password')]);



// node 3_ObjectSymbol.js // FOR RUN