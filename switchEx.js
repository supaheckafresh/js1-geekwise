var age = parseInt(prompt("How old are you?"));
var gender = prompt("What gender are you? m or f");

switch (true) {
  case (age < 18):
  if (gender === "m") {
    alert("You are a young man");
  }
  else {
    alert("You are a young lady");
  }
  break;
  case (age > 50):
  if (gender === "m") {
    alert("Your time is up, dude");
  }
  else {
    alert("Your time is up, ma'am");
  }
  break;
  default:
  if (gender === "m") {
    alert("Time is money, dude");
  }
  else {
    alert("Time is money, ma'am");
  }
  break;
}


