function greet(){
    console.log(`Hello ${this.name}`);
}
const person={
    name:'Swapna'
};
greet.call(person);


  