//Synchronous example
console.log("Start");

function synchronousOperation() {
    console.log("Synchronous operation");
}

synchronousOperation();

console.log("End");
//Asynchronous example
console.log("Start");
function asynchronousOperation() {
    setTimeout(function() {
        console.log("Asynchronous operation");
    }, 2000);
}

asynchronousOperation();

console.log("End");
