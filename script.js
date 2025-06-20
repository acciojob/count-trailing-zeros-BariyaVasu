function trailingZeros(n, input) {
	function trailingZeros(n) {
    let count = 0;
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
}

// Get user input and convert to a number
const input = prompt("Enter a positive integer:");
const number = parseInt(input);

// Validate input and show result
if (!isNaN(number) && number >= 0) {
    const result = trailingZeros(number);
    alert("Trailing zeros in " + number + "! is: " + result);
} else {
    alert("Please enter a valid non-negative integer.");
}

	
}