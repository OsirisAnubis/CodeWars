const getSumOfDigits = integer => {
  let sum = 0;
  const digits = integer.toString();
  for (let ix = 0; ix < digits.length; ix++) {
    sum += Math.floor(digits[ix]);
  }
  return sum;
};

console.log(getSumOfDigits(123));
