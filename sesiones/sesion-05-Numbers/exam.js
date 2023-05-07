let heightcm = 190
let heightmt = 1.9;
let weightkg = 73.5;
let heightmtroundedUp = Math.ceil(heightmt);
let weightkgroundedDown = Math.floor(weightkg);
console.log(heightmtroundedUp);
console.log(weightkgroundedDown);
let biggestJSNumber = function() {
    if (Number.MAX_VALUE) {
        console.log("El número más grande de JavaScript es " + Number.MAX_VALUE);
    }
};

biggestJSNumber();