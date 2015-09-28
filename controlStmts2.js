var age = parseInt(prompt("How old are you?"));
var gender = prompt("What gender are you? m or f");

/* if (age < 18) {
    if (gender === "m") {
        alert("You are a young man");
    } else {
        alert("You are a young lady");
    }
} else if (age > 50) {
    if (gender === "m") {
        alert("Your time is up, dude");
    } else {
        alert("Your time is up, ma'am");
    }
} else {
    if (gender === "m") {
        alert("Time is money, dude");
    } else {
     alert("Time is money, ma'am");
    }
}
*/

if (age < 18 && gender === "m") {alert("You are a young man");}
if (age < 18 && gender === "f") {alert("You are a young lady");}
if (age > 50 && gender === "m") {alert("Your time is up, dude");}
if (age > 50 && gender === "f") {alert("Your time is up, ma'am");}
else {
    if (gender === "m") {alert("Time is money, dude");}
    if (gender === "f") {alert("Time is money, ma'am");}
}
