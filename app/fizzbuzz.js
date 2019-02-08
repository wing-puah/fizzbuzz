function Fizzbuzz(count) {
  let FBArr = [...Array(count+1).keys()].slice(1)

  let newArr = FBArr.map( x => {
    if (x % 5 == 0 && x % 3 == 0) {return 'Fizz Buzz'}
    else if (x % 3 == 0) {return 'Fizz'}
    else if (x % 5 == 0) {return 'Buzz'}
    else return x;
  })

  return newArr
}

module.exports.Fizzbuzz = Fizzbuzz;
