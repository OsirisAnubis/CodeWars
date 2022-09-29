const fusc = n => {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else if (n % 2 === 0) return fusc(Math.floor(n / 2));
  else {
    const num = Math.floor((n - 1) / 2);
    return fusc(num) + fusc(num + 1);
  }
};

console.log(fusc(85));
