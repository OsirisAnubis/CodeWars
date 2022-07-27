/* this solution bad */
const divCon = numbers => {
  let sumStrings = 0;
  let sumNumbers = 0;
  for (const number of numbers) {
    if (typeof number === 'number') sumNumbers += number;
    else sumStrings += parseFloat(number);
  }
  return sumNumbers - sumStrings;
};

/* normal solution */
const divCon2 = numbers => {
  let sum = 0;
  for (const number of numbers) {
    if (typeof number === 'number') sum += number;
    else sum -= parseFloat(number);
  }
  return sum;
};
