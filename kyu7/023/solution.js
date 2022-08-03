const findNextSquare = sq => {
  const sqr = Math.sqrt(sq);
  return sqr % 1 ? -1 : (sqr + 1) ** 2;
};
