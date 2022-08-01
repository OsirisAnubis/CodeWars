const validBraces = braces => {
  let stack = '';
  const closeOpen = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i = 0; i < braces.length; i++) {
    const brace = braces[i];
    if (!closeOpen[brace]) stack += brace;
    else if (stack[stack.length - 1] === closeOpen[brace]) {
      stack = stack.slice(0, -1);
    }
    else return false;
  }
  if (stack.length === 0) return true
  return false;
};

const test = validBraces('[(])');

console.log(test);
