//Interface of array (number)
interface StringArray {
    [index: number]: string;
}

let phones: StringArray;
phones = ["IPhone 7", "HTC 10", "Nokia 1100"];

let myPhone = phones[0];


//Interface of array (string)
interface Dictionary {
    [index: string]: string;
}

let colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";


