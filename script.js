function trailingZeros(n, input) {
  
    let count = 0;
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
}

let number = parseInt(input);

if (!isNaN(number) && number >= 0) {
    let result = trailingZeros(number);
    alert("Number of trailing zeros in " + number + "! is: " + result);
} else {
    alert("Please enter a valid non-negative integer.");

}

const input = prompt("Enter a number");
alert(trailingZeros(input));

