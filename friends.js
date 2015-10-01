var friendLiHTML = '<li class="friend">%data%</li>';


var friends = [
    "gurpreet",
    "geoff",
    "jenny",
    "mike",
    "andrew",
    "jason",
    "aishan",
    "min",
    "nina",
    "shawn"
    ];

var i = 0;

/*
function displayFriends(friends) {
    var ul = document.querySelector('ul');
    for (var i = 0; i < friends.length; i++) {
        var formattedLi = friendLiHTML.replace('%data%', friends[i]);
        ul.innerHTML += formattedLi;
    }
}
*/

var ul = document.querySelector('ul');

var i = 0;

console.log(friends.length);

function displayFriends() {
    if (i < friends.length) {
        formattedLi = friendLiHTML.replace('%data%', friends[i]);
        console.log(formattedLi);
        ul.innerHTML += formattedLi;
        i++;
        displayFriends();
    }
}

displayFriends(friends);
