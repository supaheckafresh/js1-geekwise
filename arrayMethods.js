var fruits = ["apple", "strawberry", "tomato", "kiwi"];
/* console.log(fruits);
console.log(fruits.length);
console.log(fruits[0] + "," + fruits.slice(1));
*/

fruits.push("avocado", "nothing", ["I'm", "hiding"]);
//console.log(fruits);

var lastFruit = fruits.pop();
//console.log(lastFruit);


var meat = ["goat", "lamb", "dunno"];

Array.prototype.push.apply(meat, fruits);
//console.log(meat);
//console.log(fruits);


var nuMbeRs = ["one", "two", "three", "four"];
var middleTwo = nuMbeRs.slice(1, 3);
//console.log(middleTwo);
//console.log(nuMbeRs);

nuMbeRs.splice(2, 0, "2.5");
console.log(nuMbeRs);
