const arithmeticSequenceElements = (a, d, n) => {
  const arr = [];
  for (let num = 0; num < n; num++) {
    arr.push(a + d * num);
  }
  return arr.join(", ");
};
