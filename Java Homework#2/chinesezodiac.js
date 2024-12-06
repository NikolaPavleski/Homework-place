let userInput = prompt("Pick a number from 0 to 11 for your zodiac.");

let userNumber = Number(userInput);

if (Number. isNaN(userNumber)) {
    console.log("Invalid input. Try again");
} else if (userNumber ===0) {
    console.log("You got the Rat.");
} else if (userNumber ===1) {
    console.log("You got the Ox.");
} else if (userNumber ===2) {
    console.log("You got the Tiger.");
} else if (userNumber ===3) {
    console.log("You got the Rabbit.");
} else if (userNumber ===4) {
    console.log("You got the Dragon.");
} else if (userNumber ===5) {
    console.log("You got the Snake.");
} else if (userNumber ===6) {
    console.log("You got the Horse.");
} else if (userNumber ===7) {
    console.log("You got the Goat.");
} else if (userNumber ==8) {
    console.log("You got the Monkey.");
} else if (userNumber ===9) {
    console.log("You got the Rooster.");
} else if (userNumber ===10) {
    console.log("You got the Dog.");
} else if (userNumber ===11) {
    console.log("You got the Pig.")
} else {
    console.log("Invalid number. Try again.");
}