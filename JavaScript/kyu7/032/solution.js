const productArray = numbers => {
  const multAll = numbers.reduce((acc, number) => acc * number, 1);
  return  numbers.map(number => multAll / number);
};

const test = productArray([3,27,4,2]);
console.log(test);
