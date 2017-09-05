function getId<T>(id: T): T {
    return id;
}
let res = getId<number>(123);


//array
function getString<T>(arg: Array<T>): Array<T> {
    let result = "";
    for(let i = 0; i < arg.length; i++){
        if(i > 0){
            result += ","
        }
        result += arg[i].toString();
    }
    console.log(result);
    return arg;
}

let result = getString<number>([1,2,3,4,5]);


//class
class User<T> {
    private _id: T;
    private  _name: T;
    constructor(id: T, name: T){
        this._id = id;
        this._name = name;
    }
    getId(): T{
        return this._id;
    }
    getName(): T {
        return this._name;
    }
}

let tom = new User<any>(1, "nnn");
console.log(typeof tom); //возвращает number

/*let alice = new User<string>("abc");
console.log(alice.getId()); //возвращает string*/


//interface
interface IBot<T>{
    getId(): T;
}

class Bot<T> implements IBot<T>{
    private _id: T;

    constructor(id: T){
        this._id = id;
    }
    getId(): T{
        return this._id;
    }
}



