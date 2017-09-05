//union (объединение типов)
let names : string[] | string | number;
names = "Tom";
console.log(names); // Tom
names = ["Alice", "Bob"];
console.log(names[1]);  // Bob


//typeof (проверка типов)
let sum: any;
sum = 1200;

if (typeof sum === "number") {

    let result: number = sum / 12;
    console.log(result);
}


//type (псевдонимы типов)
type stringOrNumberType = number | string;
let sum: stringOrNumberType = 36.6;
if (typeof sum === "number") {
    console.log(sum / 6);
}


//Type assertion (приведение типов)
//use <>
let someAnyValue: any = "hello world!";
let strLength: number = (<string>someAnyValue).length;
console.log(strLength); // 12

let someUnionValue: string | number = "hello work";
strLength = (<string>someUnionValue).length;
console.log(strLength); // 10

//use as
let someAnyValue: any = "hello world!";
let strLength: number = (someAnyValue as string).length;
console.log(strLength); // 12

let someUnionValue: string | number = "hello work";
strLength = (someUnionValue as string).length;
console.log(strLength); // 10