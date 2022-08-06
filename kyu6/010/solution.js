const countBits = n => (n.toString(2).match(/1/g) || []).length;

const test = countBits(7);

console.log(test);
