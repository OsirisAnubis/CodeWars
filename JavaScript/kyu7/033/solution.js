const maxProduct = (numbers, size) => {
  const maxNums = new Array(size).fill(-Infinity);
  for (const number of numbers) {
    const minOfMaxs = maxNums[0];
    if (number > minOfMaxs) {
      maxNums[0] = number; 
      maxNums.sort((a, b) => a - b);
    }
  }
  return maxNums.reduce((mult, num) => mult * num);
};

const test = maxProduct([-4,-27,-15,-6,-1], 2);
console.log(test);
