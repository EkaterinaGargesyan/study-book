class User {
    name: string;
    constructor(userName: string) {
        this.name = userName;
    }
}

class Employee extends User {
    company: string;
    constructor(employeeCompany: string, userName: string){
        super(userName);
        this.company = employeeCompany;
    }
}

// use <>
let alice: User = new Employee("Microsoft", "Alice");
let aliceEmployee: Employee = <Employee>alice;
console.log(aliceEmployee.company);

//or
console.log((<Employee>alice).company);


// use as
let alice: User = new Employee("Microsoft", "Alice");
let aliceEmployee: Employee = alice as Employee;
console.log(aliceEmployee.company);

//or
console.log((alice as Employee).company);


//Оператор instanceOf
//С помощью оператора instanceOf можно проверить, принадлежит ли объект определенному классу:
let alice: Employee = new Employee("Microsoft", "Alice");
if (alice instanceof User){
    console.log("Alice is a User");
} else {
    console.log("Alice is't a User");
}
