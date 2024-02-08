//Example 1
async function example() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Resolved!'), 1000);
    });
    const result = await promise;
    console.log(result); // Output: Resolved!
}

example();
async function readFile() {
    const fileContent = await fs.promises.readFile('example.txt', 'utf-8');
    console.log(fileContent); // Output: Content of example.txt
}

readFile();

//Example 3
async function waitForTimeout() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Done waiting!');
}

waitForTimeout();

//Example 4
async function getUserInput() {
    const userInput = await prompt('Enter your name:');
    console.log('Hello, ' + userInput + '!');
}

getUserInput();
