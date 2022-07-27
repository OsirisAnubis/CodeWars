const reverseList = arr => {
  const result = arr.slice();
  for (let i = 0; i < Math.floor(result.length / 2); i++) {
    const j = result.length - i - 1;
    const tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }
  return result;
};
