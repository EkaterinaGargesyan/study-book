interface IUser1 {
    id: number;
    name: string;
}

let employee: IUser1 = {
    id: 1,
    name: "tom"
};
console.log("id: " + employee.id);
console.log("name: " + employee.name);


//Optional properties (marked ?)
interface IUser2 {
    id: number;
    name: string;
    age?: number;
}

//Function in interface
interface IUser3 {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
let employee: IUser3 = {

    id: 1,
    name: "Alice",
    getFullName : function (surname: string): string {
        return this.name + " " + surname;
    }
};

let fullName = employee.getFullName("Tompson");
console.log(fullName); // Alice Tompson
