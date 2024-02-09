function outerFunction() {
    function innerFunction() {
        console.log('Inside inner function');
    }
    
    console.log('Inside outer function');
    innerFunction(); // Call the inner function
}

outerFunction(); // Call the outer function

//2]
function outerFunction() {
    let message = 'Hello';

    function innerFunction() {
        console.log(message);
    }

    return innerFunction; // Return the inner function
}

let myFunction = outerFunction();
myFunction(); // Call the returned inner function
    