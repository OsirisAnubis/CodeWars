const betterThanAverage = (classPoints, yourPoints) => {
  const avarate =
    (classPoints.reduce((acc, val) => acc + val, 0) + yourPoints) / 
    (classPoints.length + 1);
  return (avarate >= yourPoints) ? false : true;
}
