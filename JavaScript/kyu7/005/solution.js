const getMiddle = s => {
  const len = s.length;
  if (len === 0) return s;
  const div = Math.floor(len / 2);
  const mod = len % 2;
  return (mod === 0) ? s[div - 1] + s[div] : s[div];
};

console.log(getMiddle('hello'));
console.log(getMiddle('bak'));
console.log(getMiddle('o'));

console.log(getMiddle('hi'));
console.log(getMiddle('baba'));
console.log(getMiddle('mamafa'));
console.log(getMiddle('rifasdfa'));

console.log(getMiddle(''));

