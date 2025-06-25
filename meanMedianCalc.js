const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

console.log("Enter integers one at a time. Type 'q' to quit.");

function askInput() {
  rl.question("Enter an integer (or 'q' to quit): ", function (input) {
    if (input.toLowerCase() === 'q') {
      if (numbers.length === 0) {
        console.log("No numbers entered.");
        rl.close();
        return;
      }

      // Calculate Mean
      const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

      // Calculate Median
      const sorted = [...numbers].sort((a, b) => a - b);
      let median;
      const mid = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        median = (sorted[mid - 1] + sorted[mid]) / 2;
      } else {
        median = sorted[mid];
      }

      console.log(`Numbers: [${numbers.join(", ")}]`);
      console.log(`Mean: ${mean}`);
      console.log(`Median: ${median}`);

      rl.close();
    } else {
      const parsed = parseInt(input, 10);
      if (isNaN(parsed)) {
        console.log("Invalid input. Please enter an integer.");
      } else {
        numbers.push(parsed);
      }
      askInput();
    }
  });
}

askInput();
