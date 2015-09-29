doNothing("something", "test", "no");

function doNothing() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

var dunno = doNothing("21", "22");

console.log(dunno.arguments);

console.log(doNothing.hasOwnProperty("arguments"));
