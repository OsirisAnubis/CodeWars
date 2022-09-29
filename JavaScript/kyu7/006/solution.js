const removeRotten = bagOfFruits => {
  if (!bagOfFruits) return [];
  const rot = 'rotten';
  const lenRot = rot.length;
  const result =  bagOfFruits.map(fruit => fruit.includes(rot) 
    ? fruit.slice(lenRot).toLowerCase() : fruit);
  return result;
};

/* best solution
const removeRotten = arr => 
  arr ? arr.map(x => x.replace('rotten', '').toLowerCase()) : [];
/*

const testFruits = ['apple', 'banana', 'rottenLimon', 'rottenFruit'];

console.log(removeRotten(testFruits));
