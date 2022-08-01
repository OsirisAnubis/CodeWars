const isNumber = ch => {
  const code = ch.charCodeAt();
  return ((48 <= code) && (code <= 57)) ? true : false;
};

const isAValidMessage = message => {
  const len = message.length;
  if (len === 0) return true;
  if (len === 1) return message === '0';
  if (len === 2) return ((message[0] === '1') && (!isNumber(message[1])))
  let number = '';
  let str = '';
  let first;
  let second;
  for (let i = 0; i <= len - 2; i++)  {
    first = message[i];
    second = message[i + 1];
    if (isNumber(first)) number += first;
    else if (!isNumber(second)) str += first;
    else { //first - letter, second - number
      str += first;
        if (!(str.length === parseInt(number, 10))) return false;
      str = '';
      number = '';
    }
  }
  const last = message[len - 1];
  if (isNumber(last)) return false;
  str += last;
  if (!(str.length === parseInt(number, 10))) return false;
  return true;
};

const test = isAValidMessage('');

console.log(test);
