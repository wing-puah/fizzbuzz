function Fizzbuzz(count){
  let i = 0,
      fbArr = [];

  for(i; i < (count+1); i++){
    fbArr.push(i);
  }

  for( var j = 1; j < fbArr.length; j++){
    if (fbArr[j] % 5 == 0 && fbArr[j] % 3 == 0){
      fbArr[j] = 'Fizz Buzz';
    }
    if (fbArr[j] % 3 == 0 ){
      fbArr[j] = 'Fizz';
    }
    if (fbArr[j] % 5 == 0 ){
      fbArr[j] = 'Buzz';
    }
  }

  fbArr.shift(); // Because i start from 0 
  return fbArr;
}

module.exports.Fizzbuzz = Fizzbuzz;
