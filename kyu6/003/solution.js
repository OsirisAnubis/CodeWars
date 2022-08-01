const digitalRoot = n => {
  const str = n.toString();
  if (str.length === 1) {
    return n;
  }
  const num = str.split('').reduce((acc, val) => acc + parseInt(val, 10), 0);
  return digitalRoot(num);
};

const test = digitalRoot(456);
console.log(test);
