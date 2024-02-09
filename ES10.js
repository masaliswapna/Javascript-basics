// flat() method
const nestedArray = [1, 2, [3, 4]];
const flatArray = nestedArray.flat();
console.log(flatArray); // Output: [1, 2, 3, 4]

// flatMap() method
const array = [1, 2, 3];
const mappedArray = array.flatMap(x => [x * 2]);
console.log(mappedArray); // Output: [2, 4, 6]

const stringWithWhitespace = '   Hello, world!   ';
//trimStart()
console.log(stringWithWhitespace.trimStart()); // Output: 'Hello, world!   '
//trimEnd()
console.log(stringWithWhitespace.trimEnd());   // Output: '   Hello, world!'

//toSring()
function greet() {
    // This is a comment
    return 'Hello, world!';
}
console.log(greet.toString()); // Output: "function greet() {\n    // This is a comment\n    return 'Hello, world!';\n}"
