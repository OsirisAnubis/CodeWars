const accum = str =>
  str
  .split('')
  .map((ch, i) => ch.toUpperCase() + ch.toLowerCase().repeat(i))
  .join('-');

console.log(accum('abcd'));
