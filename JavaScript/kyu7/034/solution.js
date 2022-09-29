const duckShoot = (ammo, aim, ducks) => {
  let result = ducks;
  const goodShoots =  Math.floor(ammo * aim);
  for (let i = 0; i < goodShoots; i++)
    result = result.replace('2', 'X')
  return result;
};

const test = duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|');
console.log(test);
