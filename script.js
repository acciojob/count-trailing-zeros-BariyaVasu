<script>
    function trailingZeros(n) {
      let count = 0;
      for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
      }
      return count;
    }

    // Get input from user
    const input = prompt("Enter a non-negative integer:");
    const number = parseInt(input);

    // Validate input and alert result
    if (isNaN(number) || number < 0) {
      alert("Please enter a valid non-negative integer");
    } else {
      const zeros = trailingZeros(number);
      alert(zeros);  // ✅ Only the number, to match Cypress test expectations
    }
