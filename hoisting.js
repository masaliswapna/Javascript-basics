
let y=20;
console.log(y);

console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10


bar();
var bar=function(){
    console.log("bar is not hoisted");
}

console.log(a);
const a=10;
console.log(a);
