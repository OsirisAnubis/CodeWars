const rangeBitCount = (a, b) => {
  const len = b - a + 1;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = i + a; 
  }
  return arr
    .reduce((acc, num) => acc + num.toString(2), 0)
    .match(/1/g)
    .length;
};

console.log(rangeBitCount(2, 7));
