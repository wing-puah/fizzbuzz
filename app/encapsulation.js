function Dog() {
  console.log('\n--- \nThis is within the function\n---\n')
  let owner = 'Sam',
      self = this;

  this.name = 'Hako',
  this.age = 4,
  this.gender = 'male',

  greetOwner = function() {
    return self.name + ' greets ' + owner
  }

  this.bark = function(){
    return 'Woof! Woof! '+ this.name + ' just barked';
  }

  console.log('Private method (greetOwner()): ' + greetOwner() )  // Returns 'Hako greets Sam'
}

let puppy = new Dog();

console.log('\n--- \nThis is out of the function\n---\n')

console.log('Public property (puppy.name): ' + puppy.name) // Returns 'Hako'
console.log('Private property (puppy.owner): ' + puppy.owner +
'\n') // Returns 'undefined'

console.log('Public method (puppy.bark()): ' + puppy.bark()) // Returns 'Woof! Woof! Hako just barked'
console.log('Private method (puppy.greetOwner()): ' + puppy.greetOwner()) // Returns puppy.greetOwner() is not a function
