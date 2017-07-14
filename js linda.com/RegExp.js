var myRE = /hello/;

var myString = "Does this sentence have the word hello in it?";
if ( myRE.test(myString) ) {
    console.log("Yes");
}


var myNewString = myString.replace(myRE,"goodbye");
console.log(myString);
console.log(myNewString);


var myRE = /^hello/; // ^ at the start
var myRE = /hello$/; // % at the end
var myRE = /hel+o/; // + once or more (e.g. helo, hello, helllo)
var myRE = /hel*o/; // * zero or more (e.g. heo, helo, hello)
var myRE = /hel?o/; // ? zero or one (e.g. heo or helo)
var myRE = /hello|goodbye/; // either/or
var myRE = /he..o/; // eny character
var myRE = /\wello/; // \w - означает, что может быть буква, цифра или _
var myRE = /\bhello/; // \b - слово hello должно появится после пробела или перехода на новую строку
var myRE = /[chgd]ello/; // [...] - диапазон символов