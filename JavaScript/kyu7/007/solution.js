const fingers = [
  'Thumb',
  'Index finger',
  'Middle finger',
  'Ring finger',
  'Little finger'
];
/* my solution */
const whichFinger = n => {
  if (n === 1) return fingers[0];
  const div = Math.floor((n - 2) / 4);
  const mod = (n - 2) % 4;
  return (div % 2 === 0) ? fingers[mod + 1] : fingers[3 - mod];
};

/* good solution */
const whichFinger2 = n => {
  return [
    "Index finger",
    "Thumb",
    "Index finger",
    "Middle finger",
    "Ring finger",
    "Little finger",
    "Ring finger",
    "Middle finger",
  ][n & 7];
}

console.log(whichFinger(10));
