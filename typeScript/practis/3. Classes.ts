//Class declaration
class User {

    id: number;
    name: string;
    getInfo(): string {
        return "id:" + this.id + " name:" + this.name;
    }
}


//Create instance of a class
let alice: User = new User();
alice.id = 2;
alice.name = "Alice";
console.log(alice.getInfo());


//Constructor
class User {

    id: number;
    name: string;

    constructor(userId: number, userName: String) {

        this.id = userId;
        this.name = userName;
    }
    getInfo(): string {
        return "id:" + this.id + " name:" + this.name;
    }
}

let tom: User = new User(1, "Tom");
console.log(tom.getInfo());


//static properties & function
class Operation {

    static PI: number = 3.14;

    static getSquare(radius: number): number {

        return Operation.PI * radius * radius;
    }
}
let result = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна " + result);
let result2 = Operation.PI * 30 * 30;
console.log(result2);   // 2826


