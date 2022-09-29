const solution = number => {
  let result = 0;
  for (let i = 1; i < number; i++) {
    if (i % 15 === 0) result += i;
    else if (i % 3 === 0) result += i;
    else if (i % 5 === 0) result += i;
  }
  return result;
};

const test = solution(10);
console.log(test);
