const divisibleCount = (x, y, k) =>
  (x % k === 0)
  ? Math.floor(y / k) - Math.floor(x / k) + 1
  : Math.floor(y / k) - Math.floor(x / k);
