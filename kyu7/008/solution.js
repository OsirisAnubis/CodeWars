const DNAStrand = (dna) => {
  let result = '';
  const dnaList = { };
  dnaList[dnaList['A'] = 'T'] = 'A';
  dnaList[dnaList['C'] = 'G'] = 'C';
  for (const ch of dna) {
    result += dnaList[ch];
  }
  return result;
};

console.log(DNAStrand('ATTGC'));
