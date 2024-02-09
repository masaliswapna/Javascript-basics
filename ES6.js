//1]Arrow functons
//tradiatinal function expression
let add=function(x,y){
    return x+y;
}
console.log(add(5,6));
//arrow function
let sub=(x,y)=>x-y;
console.log(sub(9,8));

//2]classes
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
}
let rect=new Rectangle(8,9);
console.log(rect.area());

//3]Template literals
let namee = 'Swapna';
let greeting = `Hello, ${namee}!
Welcome to our website.`;
console.log(greeting);

 //4]Destructuring assignment
 //1]
 let [a, b] = [1, 2];
console.log(a); // Output: 1
console.log(b); // Output: 2
//2]
let {name, age} = {name: 'John', age: 30};
console.log(name); // Output: 'John'
console.log(age); // Output: 30
//3]
function greet({name, greeting}) {
    console.log(`${greeting}, ${name}!`);
}
greet({name: 'John', greeting: 'Hello'}); // Output: 'Hello, John!'

//5]Default parameters
//1]
function greet(name = 'World') {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: 'Hello, World!'
//2]
function multiply(x, y = 2) {
    return x * y;
}
console.log(multiply(3)); // Output: 6

//3]
function greet({name = 'World', greeting = 'Hello'} = {}) {
    console.log(`${greeting}, ${name}!`);
}
greet(); // Output: 'Hello, World!'

//6]Rest parameter 
//1]
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
//2]
function join(separator, ...values) {
    return values.join(separator);
}
console.log(join(', ', 'apple', 'banana', 'orange')); // Output: 'apple, banana, orange'
//3]
function printFirstTwo([first, second, ...rest]) {
    console.log(first, second);
}
printFirstTwo(['a', 'b', 'c', 'd']); // Output: 'a b'
//4]
function printFirstTwo([first, second, ...rest]) {
    console.log(first, second);
}
printFirstTwo(['a', 'b', 'c', 'd']); // Output: 'a b'

//7]spread syntax
//1]
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
//2]
let str = 'hello';
let letters = [...str];
console.log(letters); // Output: ['h', 'e', 'l', 'l', 'o']
//3]
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, ...obj1};
console.log(obj2); // Output: {c: 3, a: 1, b: 2}

// //8]Modules(Import/export)
// // Exporting functionality from a module

// //Importing functionality from a module

// import { add } from './math.js';
// console.log(add(3, 4)); // Output: 7

// //Exporting/importing default functionality


// import add from './math.js';
// console.log(add(3, 4)); // Output: 7

//9]Generators
let sequence = generateSequence();
console.log(sequence.next().value); // Output: 1
console.log(sequence.next().value); // Output: 2
console.log(sequence.next().value); // Output: 3

//10]Enhanced object literals
//1]
let my_name = 'Swapna';
let id1 =30;
let person = { my_name, id1 };
console.log(person); // Output: { my_name: 'John', id1: 30 }
//2]
let key = 'prop';
let obj = {
    [key]: 'value'
};
console.log(obj); // Output: { prop: 'value' }
//3]
let objt = {
    method() {
        return 'Hello';
    }
};
console.log(objt.method()); // Output: 'Hello'

