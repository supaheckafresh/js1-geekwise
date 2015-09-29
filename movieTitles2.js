
var movTitles1 = [
    "The Killing of Satan",
    "Crocodile Dundee",
    "The Blob",
    "Karate Kid",
    "101 Dalmations"
];

var movTitles2 = movTitles1.slice(1, 3);

movTitles1.splice(3, 1, "The Lion King");

var userMov = prompt("Hey, what is another movie?");

function addUserMov() {
    if (movTitles1.indexOf(userMov) === -1) {
        movTitles1.push(userMov);
    } else {
        alert("hey buddy, that movie is already in the list!");
    }
}

addUserMov();

console.log("movTitles1 array: " + movTitles1);
console.log("movTitles2 array: " + movTitles2);

var p = document.querySelectorAll("p");
console.log(p);
