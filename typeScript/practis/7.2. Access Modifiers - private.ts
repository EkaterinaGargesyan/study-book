//private
class User {
    private _name: string;
    private _year: number;
    constructor(name: string, age: number){
        this._name = name;
        this._year = this.setYear(age);
    }
    private setYear(age:number): number{
        return Date().getFullYear() - age;
    }
    public showName(): void {
        console.log(`Name: ${this._name}`);
    }
    public showYear(): void {
        console.log(`Year: ${this._year}`)
    }
}

let Tom = new User("Tom", 25);
tom.showName(); //Tom
tom.showYear(); //1992
// console.log(tom._name); // нельзя обратиться, так как _name - private
// tom.setYear(45); // нельзя обратиться, так как функция - private



//Использование модификаторов в параметрах конструктора позволяет сократить написание кода.
class User2 {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }
    public showInfo(): void{
        console.log(`Name: ${this._name}, age: ${this._age}`)
    }
}

class User {
    constructor(private name: string, private age: number){
    }
    public showInfo(): void{
        console.log(`Name: ${this.name}, age: ${this.age}`)
    }
}