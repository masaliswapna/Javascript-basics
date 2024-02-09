//String padding
let str = 'hello';
console.log(str.padStart(10)); // Output: '     hello'
console.log(str.padEnd(10)); // Output: 'hello     '

//String padding with custome characters
let str1 = 'hello';
console.log(str1.padStart(10, '*')); // Output: '*****hello'
console.log(str1.padEnd(10, '*')); // Output: 'hello*****'

//
let str2 = 'hello';
console.log(str2.padStart(3)); // Output: 'hello'
console.log(str2.padEnd(3)); // Output: 'hello'

let obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // Output: [1, 2, 3]

for (let value of Object.values(obj)) {
    console.log(value);
}
// Output:
// 1
// 2
// 3

let obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj1)); // Output: [['a', 1], ['b', 2], ['c', 3]]

for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
// Output:
// a 1
// b 2
// c 3

let obj2 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(Object.entries(obj2)); // Output: [['0', 'a'], ['1', 'b'], ['2', 'c']]

function sum(
    x,
    y,
) {
    return x + y;
}
console.log(sum(1, 2)); // Output: 3

let arr = [
    'apple',
    'banana',
    'orange',
];
console.log(arr); // Output: ['apple', 'banana', 'orange']

