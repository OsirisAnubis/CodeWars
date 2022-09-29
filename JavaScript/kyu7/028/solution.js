const longest = (s1, s2) => [...new Set([...s1, ...s2])].sort().join('');

const test = longest("aretheyhere", "yestheyarehere");
console.log(test);
