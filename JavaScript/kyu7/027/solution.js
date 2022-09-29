const gordon = a => a
  .toUpperCase().split(' ').map(word => word + '!!!!').join(' ')
  .replace(/A/g, '@').replace(/[EIOU]/g, '*');

console.log(gordon('hello'));
