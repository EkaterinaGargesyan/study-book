//В данном случае функция будет возвращать значение типа number
let add = function (a: number, b: number) : number {
    return a + b;
};
let result = add(1, 2);


// If the function does not return anything, then type void
function add(a: number, b: number): void {
    console.log(a + b);
}
add(10, 20);


//Optional parameters (marked ?) are writed after required parameters
function getName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

var result = getName("Иван", "Кузнецов");
console.log(result); // Иван Кузнецов
var result2 = getName("Вася");
console.log(result2); // Вася


//Optional parameters - default parameters
function getName(firstName: string, lastName: string="Иванов") {
    return firstName + " " + lastName;
}
var result = getName("Иван", "Кузнецов");
console.log(result); // Иван Кузнецов
var result2 = getName("Вася");
console.log(result2); // Вася Иванов


//Optional parameters - Set of same parameters
function addNumbers(firstNumber: number, ...numberArray: number[]): number {

    var result = firstNumber;
    for (var i = 0; i < numberArray.length; i++) {
        result+= numberArray[i];
    }
    return result;
}

var result1 = addNumbers(3, 7, 8);
console.log(result1); // 18

var result2 = addNumbers(3, 7, 8, 9, 4);
console.log(result2); // 31


//Overload (перегрузка) functions
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
    return x + y;
}

var result1 = add(5, 4);
console.log(result1);   // 9
var result2 = add("5", "4");
console.log(result2);   // 54