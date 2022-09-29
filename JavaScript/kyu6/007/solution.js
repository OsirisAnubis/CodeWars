const countAlphabet = ch => ch.charCodeAt() - 96;

const weightWord = word => {
  let result = 0;
  for (let i = 0; i < word.length; i++) result += countAlphabet(word[i]);
  return result;
};

const high = str =>
  str 
  .split(' ')
  .reduce((acc, val) => (weightWord(val) > weightWord(acc) ? val : acc), '');

const test = high('ba cd');
console.log(test);
