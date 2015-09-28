
var movTitles = [
    "The Killing of Satan",
    "Crocodile Dundee",
    "The Blob",
    "Karate Kid",
    "101 Dalmations"
];

console.log(movTitles);

var secondMov = alert(movTitles[1]);

var anotherMovie = prompt("Hey. What's another movie?");

movTitles.push(anotherMovie);


function randomMovIndex() {
    return Math.floor((Math.random() * movTitles.length));
}

var randMov = movTitles[randomMovIndex()];
console.log("Random: " + randMov);

var randMovAlert = alert(randMov);

var dom = document.querySelector("p");
console.log(dom);
dom.innerHTML = randMov;
