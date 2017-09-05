let z = 6;
const z = 6;


//Data Types
let x: number = 10;
let hello: string = "hello world";
let isValid: boolean = true;


//Arrays
let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];


//Tuples
let userInfo: [string, number];
userInfo = ["Tom", 28];
console.log(userInfo[1]); // 28


//enum
enum Season { Winter, Spring, Summer, Autumn }
let current: Season = Season.Summer;

enum Season { Winter=0, Spring=1, Summer=2, Autumn=3 }
var current: string = Season[2];    // 2 - числовое значение Summer
console.log(current);   // Summer


//any
let someVar: any = "hello";
var someArray: any[] = [ 24, "Tom", false];


//null & underfined
let a: undefined = undefined;
let b: null = null;


//object
let person = {name:"Tom", age:23};