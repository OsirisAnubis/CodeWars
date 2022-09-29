const XO = str => {
  const countXO = { 'x': 0,'o': 0 };
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') countXO['x']++;
    else if (str[i].toLowerCase() === 'o') countXO['o']++;
  }
  return countXO['x'] === countXO['o'];
};
