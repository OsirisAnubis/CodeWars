const switcheroo = x => {
  let result = '';
  for (let i = 0; i < x.length; i++) {
    const letter = x[i];
    if (letter === 'a') result += 'b';
    else if (letter === 'b') result += 'a';
    else result += letter;
  }
  return result;
};
