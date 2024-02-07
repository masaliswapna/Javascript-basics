//Example 1
const promise = new Promise((resolve, reject) => {
// Perform an asynchronous operation, such as fetching data
setTimeout(() => {
  const data = { message: "Data fetched successfully" };
  
  resolve(data);
  
   reject(new Error("Failed to fetch data"));
}, 1000);
});

promise.then((data) => {
console.log(data); // Output: { message: "Data fetched successfully" }
}).catch((error) => {
console.error(error); // Output: Error: Failed to fetch data
});

//Example 2
function f1() {
console.log('f1');
}

function f2() {
console.log('f2');
}

function main() {
console.log('main');

setTimeout(f1, 0);

new Promise((resolve, reject) =>
    resolve('I am a promise')
).then(resolve => console.log(resolve))

f2();
}

main();

//Example 3
function f1() {
console.log('f1');
}

function f2() { 
    console.log('f2');
}

function f3() { 
    console.log('f3');
}

function main() {
  console.log('main');

  setTimeout(f1, 50);
  setTimeout(f3, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after f1 and f3! Really?')
  ).then(resolve => console.log(resolve));
  
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  f2();
}
main();

//Example 4

function f1() {
  new Promise((resolve, reject) => {
    resolve('rejected'); // Use reject instead of rejectes
  }).then(resolve => console.log(resolve));
}

f1();
