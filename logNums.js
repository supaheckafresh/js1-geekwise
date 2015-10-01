
/* while */
var x = 1;
while(x < 11){
  //console.log(x);
  x++;
}

/* do-while */
var x = 1;
do {
  //console.log(x);
  x++;
} while (x < 11);


for (var x = 0; x < 11; x++) {
  if (x !== 5 && x !== 7) {
    //console.log(x);
  }
}

for (var x = 0; x < 11; x++) {
  //(x !== 5 && x !== 7) ? console.log(x) : false;
}

for (var x = 1; x < 11; x++) {
  if (x === 7)
    break;
  console.log(x);
}
