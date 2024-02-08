//push
const fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
//pop
const numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
//foreach
const colors = ['red', 'green', 'blue'];
colors.forEach((color,i)=>{
console.log(color);
});
//filter
const scores = [85, 90, 70, 95, 60];
const passed = scores.filter(score => score >= 75);
console.log(passed); // Output: [85, 90, 95]
//map
const num = [1, 2, 3, 4, 5];
const squaredNumbers = num.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
