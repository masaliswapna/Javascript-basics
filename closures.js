function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from the outer function
    }

    return innerFunction; // Return the inner function
}

const myFunction = outerFunction(); // Call outer function and assign the returned inner function to myFunction

myFunction(); // Call myFunction, which still has access to outerVariable due to closure
