const sumTwoSmallestNumbers = numbers => {
  let low1 = Infinity;
  let low2 = Infinity;
  for (const number of numbers) {
    if ((number > 0) && (number <= low1)){
      low2 = low1;
      low1 = number;
    }
    else if ((number > 0) && (number < low2)) low2 = number;
  }
  return low1 + low2;
};
