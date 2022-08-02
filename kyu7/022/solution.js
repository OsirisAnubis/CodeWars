const solution = (str, ending) =>
  (((str.length >= ending.length) && (str.slice(- ending.length) === ending))
  || (ending.length === 0));

const test = solution('abcde', '');

console.log(test);
