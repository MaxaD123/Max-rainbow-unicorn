var i;
var arr = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(arr);
var person = {
    name: "Max",
    age: 23,
    crazy: true
};
console.log(person);
function returnX(x) {
    console.log("Greetings ".concat(x));
}
returnX(person.name);
for (var i_1 = 0; i_1 <= (arr.length - 1); i_1++) {
    returnX(arr[i_1]);
}
