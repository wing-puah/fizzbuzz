var Dog = require("./encapsulation").Dog;

function ShihTzu() {}

ShihTzu.prototype = Object.create(Dog.Prototype)

const cookie = new ShihTzu('cookie', 2, 'female')
cookie.bark() // Returns 'Woof! Woof! Cookie just barked'
