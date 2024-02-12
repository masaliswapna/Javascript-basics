// let sequence = generateSequence();
// console.log(sequence.next().value); // Output: 1
// console.log(sequence.next().value); // Output: 2
// console.log(sequence.next().value); // Output: 3

function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = generatorFunction();
  
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: false }
  console.log(generator.next()); // { value: undefined, done: true }
  