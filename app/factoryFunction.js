function dogFactory(name, age, gender) {
  const bark = () => console.log('Woof! Woof! ' + name + ' just barked');
  const barkNotReturn = () => console.log('Woof! I am not returned');
  return { name, age, gender, bark };
}

const Hako = dogFactory('Hako', 4, 'male');
Hako.bark(); // Returns 'Woof! Woof! Hako just barked'
console.log( Hako.age ) // Returns 4
Hako.barkNotReturn(); // Returns Hako.barkNotReturn() is not a function
