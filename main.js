let Pet = {
    name : 'cat',
    age : 12,
    isOld : true,
    firstName : undefined,
    furcolor : "red",
};

// Dot notation
Pet.name = 'dog';

console.log(Pet.name);
// Bracket notation
let selection = 'age';
Pet[selection];

console.log(Pet[selection])


// Arrays

let selectedColor = ['red', 'blue'];
selectedColor[2] = 0
console.log(selectedColor);
console.log(selectedColor[0])
console.log(selectedColor[1])

// function

function greet(hey){
    console.log('hey ' + hey)
}

greet('bye pussy')