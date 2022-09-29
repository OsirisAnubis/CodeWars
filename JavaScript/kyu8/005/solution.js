const isReallyNaN = (val) => {
  const isNumber = typeof val === 'number';
  if (!isNumber || (Infinity + val === Infinity)) return false; 
  return true;
};
/*
 good solution
 const isReallyNaN = Number.isNaN
*/
