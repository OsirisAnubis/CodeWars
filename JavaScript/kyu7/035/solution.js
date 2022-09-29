const collatz = n =>  {
  let count = 1;
  let number = n;
  while (number > 1) {
    if (number % 2 === 0) number /= 2;
    else number = number * 3 + 1;
    count++;
  }
  return count;
};

console.log(collatz(15));
