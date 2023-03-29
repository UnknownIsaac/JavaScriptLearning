let Pet = {
    name : 'cat',
    age : 12,
    isOld : true,
    firstName : undefined,
    furcolor : "red",
    sound : function(){
        let noice = "meow";
        return noice
    },
    family : [
        {name: "Bootsy"},
        {name: "Sims"},
        {name: "Moon"},
        
    ],
};

// console.log(Pet["family"][2]["name"])


// Dot notation
Pet.name = 'dog';

// console.log(Pet.name);
// Bracket notation
let selection = 'age';
Pet[selection];

// Arrays

// let selectedColor = ['red', 'blue'];
// selectedColor[2] = 0
// console.log(selectedColor);
// console.log(selectedColor[0])
// console.log(selectedColor[1])

// function

function greet(hey){
    console.log('hey ' + hey)
}

// greet('bye pussy')
// console.log(Pet.family[2]);
// 
// console.log(Pet["name"])

let car = {
    make: "Corvette",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons: [
            { maker: "BMW"},
            { maker: "BMW2"},
        ],
    },
    drive: function(){return "drive";}
};

// console.log(car["engine"]["pistons"][1]["maker"])