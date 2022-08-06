const reverseWord = word => {
  let result = '';
  for (let i = word.length - 1; i >= 0; i--) result += word[i];
  return result;
};

const maxLenght = arrWords => 
  arrWords
  .reduce((acc, word) => (acc < word.length) ? word.length : acc, 0);

const mirror = text => {
  let result = '';
  const arrWords = text.split(' ');
  const maxLen = maxLenght(arrWords);
  result += '*'.repeat(maxLen + 4) + '\n';
  for (const word of arrWords) {
    const revWord = reverseWord(word);
    const lenWord = word.length;
    const spacesAfter = ' '.repeat(maxLen + 1 - lenWord);
    result += '* ' + revWord + spacesAfter + '*' + '\n';
  }
  result += '*'.repeat(maxLen + 4);
  return result;
};

const test = mirror("zjfsc wlinrdra pgt");
console.log(test);
