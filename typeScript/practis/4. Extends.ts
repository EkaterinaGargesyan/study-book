class User {

    name: string;
    constructor(userName: string) {

        this.name = userName;
    }
    getInfo(): void {
        console.log("Имя: " + this.name);
    }
}

class Employee extends User {

    company: string;
    work(): void {
        console.log(this.name + " работает в компании " + this.company);
    }
}

let bill: Employee = new Employee("Bill");
bill.getInfo();
bill.company = "Microsoft";
bill.work();



