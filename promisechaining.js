//Example 1
const promise1 = new Promise((resolve, reject) => {
    resolve('First Promise Resolved');
});

promise1.then((result) => {
    console.log(result); // Output: First Promise Resolved
    return 'Second Promise Resolved';
}).then((result) => {
    console.log(result); // Output: Second Promise Resolved
});

//Example 2
function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async Task Resolved');
        }, 1000);
    });
}

asyncTask().then((result) => {
    console.log(result); // Output: Async Task Resolved
    return 'Second Task Resolved';
}).then((result) => {
    console.log(result); // Output: Second Task Resolved
});

//Example 3
function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = new Error('Task Failed');
            reject(error);
        }, 1000);
    });
}

asyncTask().then((result) => {
    console.log(result); // This won't execute
}).catch((error) => {
    console.error(error.message); // Output: Task Failed
});

//Example 4
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Output: JSON data of post 1
    });

    //Example 5
    const promise1 = Promise.resolve('Promise 1 Resolved');
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Promise 3 Resolved');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // Output: ['Promise 1 Resolved', 42, 'Promise 3 Resolved']
});
