//Exponentiation Operator (**):
let result = 2 ** 3; // Equivalent to Math.pow(2, 3)
console.log(result); // Output: 8

//Array.prototype.includes():
let arr = [1, 2, 3];
console.log(arr.includes(2)); // Output: true
console.log(arr.includes(4)); // Output: false

//Async functions
async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}

fetchData().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
