//Creating an empty array
let emptyarray=[];

//creating an array with initialisinng values
let numbers=[1,2,3,4,5];
let fruits=['Apple', 'Mango', 'Banana', 'papaya'];

//Accessing elements
console.log(fruits[0]);//Apple
console.log(fruits[1]);//Mango

//accessing the length of an array
console.log(fruits.length);//4

//Adding elements at the end of an array
fruits.push('Grapes');
console.log(fruits);//[ 'Apple', 'Mango', 'Banana', 'papaya', 'Grapes' ]

//Removing elements from the end of an array
console.log(fruits.pop());//Grapes
console.log(fruits);//[ 'Apple', 'Mango', 'Banana', 'papaya' ]

//Manupulating an array
//shift()
console.log(fruits.shift());//Apple
console.log(fruits);//[ 'Mango', 'Banana', 'papaya' ]

//unshift()
fruits.unshift('Orange','Watermelon');
console.log(fruits);//[ 'Orange', 'Watermelon', 'Mango', 'Banana', 'papaya' ]

//splice()
fruits.splice(1,2,'kiwi', 'Pinapple');
console.log(fruits);//[ 'Orange', 'kiwi', 'Pinapple', 'Banana', 'papaya' ]

//Iterating over arrays


// Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Using for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

//Searching and filtering


// Finding an element's index
let index = numbers.indexOf(3); // index: 2
console.log(index);

// Filtering elements
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
}); 
console.log(evenNumbers);   // evenNumbers: [2, 4]


//map
const num = [1, 2, 3, 4, 5];
const squaredNumbers = num.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
