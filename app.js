alert("Welcome to the game of the secret number ｡◕‿◕｡");

let maxNumber = 69;
let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
let guess;
let attempts = 0;

while (secretNumber !== guess) {
    guess = prompt(`Choose a number between 1 and ${maxNumber}`);
    
    if (guess === null) {
        // The user clicked Cancel or closed the prompt window
        break;
    }

    guess = parseInt(guess);

    if (isNaN(guess) || guess < 1 || guess > maxNumber) {
        alert("Please enter a valid number within the specified range.");
        continue;
    }

    attempts++;

    if (secretNumber < guess) {
        alert(`The secret number is less than ${guess}`);
    } else if (secretNumber > guess) {
        alert(`The secret number is more than ${guess}`);
    }
}

let wordChange = attempts === 1 ? "attempt" : "attempts";

if (secretNumber === guess) {
    alert(`Congratulations! You discovered the secret number: ${secretNumber}, with ${attempts} ${wordChange}!`);
} else {
    alert("Game canceled. Better luck next time!");
}
