# Javascript & programming concepts
This repo contains a list of programs that I created to understand the principles of programming and the concepts of Javascript. These programs are generated from various places like hackerrank and common interview questions.


## Table of contents
- [Object-oriented programming](#object-oriented-programming)
- [Functional programming](#functional-programming)
- String
- Arrays
- Recursion
- Data structure

### Object-oriented programming
> Object-oriented programming (OOP) is to use objects to model real world things that we want to represent inside our programs, and/or provide a siple way to access functionality that would otherwise be hard of impossible to make use of. — _MDN web docs_

_Objects_ can contain related data and/or functionality.

For example, if we are trying to create a petting zoo, we will have different kinds of animals. We will initialize a `male dog` called `Hako` and aged `4` as an object.

```javascript
let Dog = {
  name = 'Hako',
  age = 4,
  gender = 'male',

  bark: function(){
    return 'Woof! Woof! '+ this.name + ' just barked';
  }
}
```

<details>
  <summary>__Objects literal, properties, methods__</summary>

  Over here, we have created a `Dog` object, which can also be referred to as an __object literal__.

  The first 3 values, `name`, `age` and `gender` are data values and are referred to as the object's __properties__.

  The last value, `bark`, is a function that allows the `Dog` to interact with the object's data. This is referred as an object's __methods__.

</details>

<details>
  <summary>__Encapsulation__</summary>

  With the `Dog` example above, we can access all the __properties__ and __methods__ through a `dot notation` like `Dog.name` or a `bracket notation` like `Dog['age']`. We can also call the function with the `dot notation`: `Dog.greet()`. We call this __public properties and methods__.

  The concept of __encapsulation__ is create __private properites and methods__ that are only accessible by the code internal to the object.

  ```javascript
  function Dog() {
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

    console.log('Private function: ' + greetOwner() )  // Returns 'Hako greets Sam'
  }

  let puppy = new Dog();

  console.log('--- \nThis is out of the function')

  console.log('Private property (puppy owner): ' + puppy.owner) // Returns 'undefined'
  console.log('Public property (puppy name): ' + puppy.name) // Returns 'Hako'

  console.log('Private method (puppy greet owner): ' + puppy.greetOwner()) // Returns puppy.greetOwner() is not a function
  console.log('Public method (puppy bark): ' + puppy.bark()) // Returns 'Woof! Woof! Hako just barked'
  ```
  In the `app` folder, there is an `encapsulation.js` file that you can run to see the principles at work.

</details>

#### Coming soon
__Abstraction__

__Inheritance__

__Polymorphism__

### Functional programming
> Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data —  _Wikipedia_

__Pure function__

Functional programming revolves around the concept of writing __pure functions__. A pure function has the following behaviors:

- It returns the same results if given the same arguments.
- It does not cause any observable side effects, which means it will not modify the state variable value(s) outside its local environment.


__Immutability__

An immutable data means that the state does not change after it's created. Instead of changing the values of an immutable object, a new object is created with the new value.
