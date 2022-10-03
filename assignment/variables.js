console.log('js');

let firstName = 'Vanessa';
let lastName = 'Wharton';
let fullName = firstName + ' ' + lastName; 
let luckyNumber = 2;
let adventurous = true;
let food = 'lefse';
let pets = 3;
let friendsPets = 2;

pets += 2;

const allowedPets = 6;

console.log( 'fullName');
console.log( 'My name is', fullName, 'and I think', luckyNumber, 'is a winner!');

if( adventurous ){true
    console.log( 'Adventures are great!');
}
else{
    console.log( 'How about we stay home?');
}

if( luckyNumber == 2 && adventurous == true){
    console.log( 'Roll the dice!');
}

if( pets < allowedPets){
    console.log( 'I can have more pets!');
}
else if( pets == allowedPets){
    console.log( 'I have enough pets');
}
else if( pets > allowedPets){
    console.log( 'Oh no, I have too many pets!');
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

// STRETCH GOALS:
// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.
// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
