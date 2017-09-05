interface PersonInfo {
    (name: string, surname: string): void;
    fullname: string;
    password: string;
    authenticate(): void;
}

function personBuilder(): PersonInfo {
    let person = <PersonInfo>function (name: string, surname: string): void {
        person.fullname = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(`${person.fullname} входит в систему с паролем: ${person.password}`)
    };
    return person;
}

let tom = personBuilder();
tom("Tom", "Simpson");
tom.password = "1234560";
tom.authenticate();