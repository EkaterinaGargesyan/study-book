var messages = [
    "jjjjjjj",
    "ooooooo"
];

function inspire() {
    var index = parseInt(Math.random()*10) % messages.length;
    return messages[index];
}
 console.log(inspire());

/*
function sum (a, b) {
    return a + b;
}

console.log(sum(1, 211));*/
