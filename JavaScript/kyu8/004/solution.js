const message = 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.';
const playerRankUp = (points) => (points >= 100) ? message : false;