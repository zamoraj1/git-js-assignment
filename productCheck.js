// Load readline module to read from the command line
const readline = require("readline");

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = []; // Array to hold user-entered integers

console.log("Enter integers one at a time. Type 'q' to quit.");

// Function to handle user input
function askInput() {
  rl.question("Enter an integer (or 'q' to quit): ", function (input) {
    if (input.toLowerCase() === 'q') {
      // Show the numbers entered
      console.log(`You entered: [${numbers.join(", ")}]`);

      // Edge case: if 2 or fewer numbers, exit early
      if (numbers.length < 3) {
        console.log("Not enough numbers to evaluate condition.");
        rl.close();
        return;
      }

      // Check the product condition
      let conditionMet = false;

      // Nested loops to find i * j == k
      for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          if (i !== j) {
            const product = numbers[i] * numbers[j];
            if (numbers.includes(product)) {
              console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${product}`);
              conditionMet = true;
              break;
            }
          }
        }
        if (conditionMet) break;
      }

      if (!conditionMet) {
        console.log("Condition was not met.");
      }

      rl.close();
    } else {
      const parsed = parseInt(input, 10);
      if (isNaN(parsed)) {
        console.log("Invalid input. Please enter a valid integer or 'q' to quit.");
      } else {
        numbers.push(parsed);
      }
      askInput();
    }
  });
}

askInput(); // Start the program
