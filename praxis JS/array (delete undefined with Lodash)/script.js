var fruits = [
    "apple",
    "apricot",
    "banana",
    "orange"
];

fruits[10] = "cherry";


fruits = _.compact(fruits);

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/*
 fruits.forEach(function (item, i, fruits) {
 console.log(item);
 });*/


