var hbd = "Happy Birthday",
    fj = "Funky Junk",
    smb = "Snowy Morning Blues",
    bf = "Blue Finger",
    sl = "Stagolee",
    ac = "Alligator Crawl",
    gr = "Guitar Rag",
    bh = "Boys of the Blue Hill",
    ft = "Freight Train",
    mmb = "Monday Morning Blues";

var songArray = [hbd, fj, bf, sl, ac, gr, bh, ft, mmb];

function songAlerts() {
  for (var songIndex in songArray) {
    var song = songArray[songIndex];
    var songAlert = alert(song);
    console.log(song);
  }
}

if (songArray.length > 0)
  songAlerts();


