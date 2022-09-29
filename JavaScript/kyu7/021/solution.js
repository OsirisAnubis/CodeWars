const timePushUp = (firstPushUp, multPushUp, countPushUp) =>
  firstPushUp * ((multPushUp ** countPushUp - 1) / (multPushUp - 1));

const alexMistakes = (
  numberOfKata, timeLimit,
  multPushUp = 2, minForKata = 6, firstPushUp = 5
  ) => {
  const errTime = timeLimit - minForKata * numberOfKata;
  let countPushUp = 0;
  while (true) {
    if (timePushUp(firstPushUp, multPushUp, countPushUp) > errTime)
      return countPushUp - 1;
    countPushUp++;
  }
};

const test = alexMistakes(9, 180);
console.log(test);
