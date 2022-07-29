const rakeGarden = garden => garden
  .split(' ')
  .map(val => ((val === 'gravel') || (val === 'rock')) ? val : 'gravel')
  .join(' ');

const garden = 
  'slug spider rock gravel gravel gravel gravel gravel gravel gravel';

console.log(rakeGarden(garden));
