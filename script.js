 function trailingZeros(n) {
      let count = 0;
      for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
      }
      return count;
    }

    // Get input via prompt
    const input = prompt("Enter a non-negative integer:");
    const num = parseInt(input);

    // Validate input and show result
    if (isNaN(num) || num < 0) {
      alert("Please enter a valid non-negative integer");
    } else {
      const result = trailingZeros(num);
      alert(result); // ✅ Only number output as required
    }