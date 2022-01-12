//HW1
let person = {
    name: "Bob",
    occupation: "web developer",
    hobbies: "painting",
};

console.log(person.name);
console.log(person["occupation"]);

//HW2
let obj ={
    b: 2,
    a: 1,
    c: 3,
}
let arr =  Object.keys(obj) 
for (i =0; i < arr.length; i++){
    arr[i]=arr[i].toUpperCase();
}
console.log(arr)

//Hw4
let obj2 ={
    foo: {a: "hello", b: "world"},
    bar: ["exmaple","mem", null, {xyz : 6}, 88],
    qux: [4,8,12]
};

obj2.bar[3].xyz = 606;

console.log(obj2)

