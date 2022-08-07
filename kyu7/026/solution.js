function min(arr, toReturn) {
  switch(toReturn) {
  case 'value':
    return Math.min(...arr);
  case 'index':
    return arr.indexOf(Math.min(...arr));
  }
}
