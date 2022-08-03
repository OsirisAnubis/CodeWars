const nearestSq = n => {
  const num = Math.floor(n ** 0.5);
  const diff1 = Math.abs(n - num ** 2);
  const diff2 = Math.abs(n - (num + 1) ** 2);
  return diff1 < diff2 ? num ** 2 : (num + 1) ** 2;
};
