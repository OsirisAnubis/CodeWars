const colourAssociation = array =>
  array.reduce((acc, val) => (acc.push({ [val[0]]: val[1] }), acc), []);

const obj = colourAssociation([["white", "goodness"], ["blue", "tranquility"]]);
console.log(obj);
