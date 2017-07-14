

// DELETE/ADD & LENGTH

var colors = [
    "red",
    "green",
    "blue",
    "black"
];

delete colors[3];

colors[3] = "white";
colors[10] = "yellow";

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


/*//ARRAYS (именованные списки)

var command = {
    "goalKeeper": "Ryatov",
    "bombardir": "Ibraimovich",
    "defender": "Shevchuk"
};

///console.log(command["defender"]);
//console.log(command.defender);

for (var role in command) {
    console.log(role + " => " + command[role]);
}*/


/*//ARRAYS (нумерованные списки)

var colors = [
    "red",
    "green",
    "blue"
];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

var colors_3 = [
    [255,0,0],
    [0,255,0],
    [0,0,255]
];

for (var i = 0; i < 3; i++) {
    var color = "";
    for (var j = 0; j < 3; j++) {
        color += colors_3[i][j] + " ";
    }
    console.log(color);
}*/
