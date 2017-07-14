var a, b;
var operator;

while (isNaN(a) || a === "") {
    a = prompt("Введите число");
}
while (!(operator == "+" || operator == "-" || operator == "*" || operator == "/")) {
    operator = prompt("Введите оператор + - * /");
}

while (isNaN(b) || b === "") {
    b = prompt("Введите число");
}

switch (operator) {
    case "+":
        alert("Результат = " + (+a + +b));
        break;
    case "-":
        alert("Результат = " + (+a - +b));
        break;
    case "*":
        alert("Результат = " + (+a * +b));
        break;
    case "/":
        alert("Результат = " + (+a / +b));
        break;
    default:
        alert("Результат неизвестен!");
}
