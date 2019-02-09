var expect = require('chai').expect;
var Fizzbuzz = require("../app/fizzbuzz").Fizzbuzz;

describe('Fizzbuzz()', function(){

  it('should start from 1', function(){
    var zero = Fizzbuzz(100)[0];
    
    expect(zero).to.equal(1);
  });

  it('should return the length in params', function(){
    var five = Fizzbuzz(5).length,
        hundred = Fizzbuzz(100).length,
        fiftyThousand = Fizzbuzz(50000).length;

    expect(five).to.equal(5);
    expect(hundred).to.equal(100);
    expect(fiftyThousand).to.equal(50000);
  });

  it('should return Fizz Buzz when number is divisible by both 3 AND 5', function(){
    var fifteen = Fizzbuzz(100)[14];
    expect(fifteen).to.equal('Fizz Buzz');
  });

  it('should return Fizz when number is divisible by 3', function(){
    var third = Fizzbuzz(100)[2],
        thousand = Fizzbuzz(10000)[6665];

    expect(third).to.equal('Fizz');
    expect(thousand).to.equal('Fizz');
  });

  it('should return Fizz when number is divisible by 5', function(){
    var fifth = Fizzbuzz(100)[4],
        thousand = Fizzbuzz(10000)[9994];

    expect(fifth).to.equal('Buzz');
    expect(thousand).to.equal('Buzz');
  });

});
