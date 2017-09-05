// protected
//Модификатор protected во многом аналогичен private - свойства и методы с данным модификатором
// не видны из вне, но к ним можно обратиться из классов-наследников

class User {
    private _name: string;
    protected age: number;
    constructor(name: string, age: number){
        this._name = name;
        this.age = age;
    }
    public showInfo(): void {
        console.log(`Name: ${this._name}, age: ${this.age}`);
    }
}

class Employee extends User {
    private company: string;
    constructor(name: string, age: number, company: string){
        super(name, age);
        this.company = company;
    }
    public showData(): void {
        console.log(`Age: ${this.age}`);
        //console.log("Name: " + this.name); // не работает, так как name - private
    }
}