//Тип функции
let operation: (x: number, y: number) => number;
operation = function(x: number, y: number): number {
    return x + y;
};
console.log(operation(10, 20)); // 30
operation = function (x: number, y: number): number {
    return x * y;
};
console.log(operation(10, 20)); // 200


//Функции обратного вызова
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{

    let result = operation(x, y);
    return result;
}
let operationFunc: (x: number, y: number) => number;
operationFunc = function (a: number, b: number): number {
    return a + b;
};
console.log(mathOp(10, 20, operationFunc)); // 30

operationFunc = function (a: number, b: number): number {
    return a * b;
};
console.log(mathOp(10, 20, operationFunc)); // 200


//Лямбды
//Лямбда-выражения представляют выражения типа (параметры) => тело функци

let sum = (x: number, y: number) => {
    x *= 2;
    return x + y;
};
let result = sum(15, 35); // 65
console.log(result);

//Лямбда-выражения можно передавать в функцию вместо параметра, который представляет собой функцию:
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{

    let result = operation(x, y);
    return result;
}
console.log(mathOp(10, 20, (x,y)=>x+y)); // 30
console.log(mathOp(10, 20, (x, y) => x * y)); // 200