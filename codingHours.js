function codingHours(years, dailyHours) {
  return (years * 365) * dailyHours;
}

var hallie = codingHours(6, 2.5);
var jules = codingHours(4, 4);

// function codingWinner(person1, person2) {
//   return Math.max(person1, person2);
// }

// console.log(codingWinner(hallie, jules));

var winner = (jules > hallie) ? "Jules" : "Hallie";
var winnerHours = (jules > hallie) ? jules : hallie;

console.log(winner + " has spent more time coding (" + winnerHours + " Hours)");
