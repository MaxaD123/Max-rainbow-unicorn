let  i: number

let arr: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(arr);

const person: {name: string, age: number, crazy: boolean } = {
    name: "Max",
    age: 23,
    crazy: true
};
console.log(person);

function returnX(x: string) {
    console.log(`Greetings ${x}`)
}

returnX(person.name)

for (let i = 0; i <= (arr.length - 1); i++) {
    returnX(arr[i])
}