//1} function as declaration
function greet(a,b){
    return a+b;
}
console.log(greet(10,20));

//2]functionas as a expression
const fun = function(name) {
    console.log("Hello, " + name + "!");
};
fun(Swapna);
//3]Arrow function
const code = (name) => {
    console.log("Hello, " + name + "!");
};
code(Javascript);
//4] anonymous functions
const blank = function(name) {
    console.log("Hello, " + name + "!");
};
blank()

setTimeout(function() {
    console.log("Timeout expired!");
}, 1000);

