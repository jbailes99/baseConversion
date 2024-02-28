function decimalToBase(decimalNumber, base) {
  // check if base value is valid
  if (base < 2 || base > 16 || !Number.isInteger(base)) {
    console.log(
      "Invalid base. Please enter a base greater than 2 and less than 16"
    );
    return null;
  }

  // convert
  const baseValue = decimalNumber.toString(base);
  return baseValue;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the decimal number: ", (decimalNumber) => {
  rl.question("Enter the base for conversion: ", (base) => {
    const resultValue = decimalToBase(
      parseInt(decimalNumber, 10),
      parseInt(base, 10)
    );

    if (resultValue !== null) {
      console.log(
        `The equivalent base-${base} value of decimal ${decimalNumber} is: ${resultValue}`
      );
    } else {
      console.log("Conversion failed. Please check your inputs.");
    }

    rl.close();
  });
});
