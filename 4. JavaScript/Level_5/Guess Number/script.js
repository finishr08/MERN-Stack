let max = parseInt(prompt("Enter the maximum number: "));

let random = Math.floor(Math.random() * max) + 1;

let guess;

while (true) {
  guess = prompt("Guess Your Number: ");

  if (guess.toLowerCase() === "quit") { // Case-insensitive quit option
    console.log("You Quit!");
    break;
  }

  guess = parseInt(guess); // Convert guess to a number

  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a number.");
    continue; // Skip to the next iteration
  }

  if (guess === random) {
    console.log("You Guessed the correct number!", random);
    break;
  } else if (guess > random) {
    console.log("Hint: Your number is higher.");
  } else {
    console.log("Hint: Your number is lower.");
  }
}
