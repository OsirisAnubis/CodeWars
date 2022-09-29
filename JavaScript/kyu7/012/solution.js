const vaporcode = string => string.replace(/ /g, '').toUpperCase().split('').join('  '); 

console.log(vaporcode("Lets go to the movies"));
