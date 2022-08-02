const findUniq = arr => {
  for (let i = 0; i <= arr.length - 3; i++) {
    const equal1 = (arr[i] === arr[i + 1]);
    const equal2 = (arr[i + 1] === arr[i + 2]);
    if (!equal1 || !equal2) {
      if (equal1) return arr[i + 2];
      if (equal2) return arr[i];
      return arr[i + 1];
    }
  }
};

const test = findUniq([ 0, 1, 0 ]);

console.log(test);
