const countBy = (x, n) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = x * (i + 1);
  }
  return arr;
};

const a = countBy(1, 10);
console.log(a);
