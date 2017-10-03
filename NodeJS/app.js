var os = require("os");
var greeting = require("./greeting");

var userName = os.userInfo().username;

console.log(`Date of the request: ${greeting.date}`);
console.log(greeting.getMessage(userName));

var User = require("./user");
var ekaterina = new User("Ekaterina", 25);

ekaterina.sayHi();