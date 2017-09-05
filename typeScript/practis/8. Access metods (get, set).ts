class User {
    private _name: string;

    public get name(): string {
        return this._name;
    }
    public  set name(name: string) {
        this._name = name;
    }
}

let tom = new User();
tom.name = "Tom"; // set-metod
console.log(tom.name); // get-metod
