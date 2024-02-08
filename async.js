//Example 1
async function myFunction() {
    return 'Hello, World!';
}

async function example() {
    const result = await myFunction();
    console.log(result); // Output: Hello, World!
}

example();

//Example 2
async function example() {
    try {
        const response = await fetch('https://example.com');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

example();

//Example 3
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
}

async function example() {
    const data = await fetchData();
    console.log(data); // Output: JSON data of post 1
}

example();

//Example 4
async function fetchData1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
}

async function fetchData2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await response.json();
    return data;
}

async function example() {
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log(data1, data2); // Output: JSON data of post 1 and post 2
}

example();

//Example 5
async function fetchData(urls) {
    const data = [];
    await Promise.all(urls.map(async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        data.push(json);
    }));
    return data;
}

async function example() {
    const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'];
    const data = await fetchData(urls);
    console.log(data); // Output: Array containing JSON data of post 1 and post 2
}

example();
