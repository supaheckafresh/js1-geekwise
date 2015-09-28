
var getUserTask = function() {
    var desiredTask = "";
    do {
        desiredTask = prompt("What would you like to do?");
        if (getUserTask.nothingEntered(desiredTask))
            alert("You need to type something, dummy!");
    }
    while (getUserTask.nothingEntered(desiredTask));

    alert(desiredTask);
    console.log(desiredTask);
};

getUserTask.nothingEntered = function(taskInput) {
    return (!taskInput || isWhiteSpace(taskInput));
};

var isWhiteSpace = function(userInput) {
    return userInput.trim().length === 0;
};

getUserTask();


//no loop version:
/*
if (!desiredTask || desiredTask.indexOf(" ") == 0) {
    alert("You need to type something, dummy!");
} else {
    alert(desiredTask);
    console.log(desiredTask);
}

*/
