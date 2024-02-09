let person= {
    name:'Swapna',
    age:24,
    city:'Bangalore'
}
console.log(person.name);
console.log(person.age);
console.log(person.city);

//using new object constructor
let person1=new Object();
person1.name='Sushma';
person1.age=28;
person1.city='Davanagere';
for (let key in person1)
{
    console.log(key+ ":"+ person1[key]);
}

//Using object.create()
let personPrototype = {
    greet: function() {
        return 'Hello!';
    }
};

let person2 = Object.create(personPrototype);
person2.name = 'Krutika';
person2.age = 30;
person2.city = 'New York';
console.log(person2);//{ name: 'Krutika', age: 30, city: 'New York' }