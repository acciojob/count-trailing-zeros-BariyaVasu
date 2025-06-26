function trailingZeros(n) {
  let count = 0;

  // Count how many times 5, 25, 125, ... divide into n
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
}

// Get input from user
const input = prompt("Enter a non-negative integer:");
const number = parseInt(input);

// Validate input and show result
if (isNaN(number) || number < 0) {
  alert("Please enter a valid non-negative integer.");
} else {
  const zeros = trailingZeros(number);
  alert(`Number of trailing zeros in ${number}! is ${zeros}`);
}


