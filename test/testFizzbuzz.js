var expect = require('chai').expect;
var Fizzbuzz = require("../app/fizzbuzz").Fizzbuzz;

describe('Fizzbuzz()', function(){

  it('should start from 1', function(){
    var zero = Fizzbuzz(100)[0];
    expect(zero).to.equal(1);
  });

  it('should return 100', function(){
    var length = Fizzbuzz(100).length;
    expect(length).to.equal(100);
  });

  it('should return Fizz Buzz when number is divisible by both 3 AND 5', function(){
    var fifteen = Fizzbuzz(100)[14];
    expect(fifteen).to.equal('Fizz Buzz');
  });

  it('should return Fizz when number is divisible by 3', function(){
    var third = Fizzbuzz(100)[2];
    expect(third).to.equal('Fizz');
  });

  it('should return Fizz when number is divisible by 5', function(){
    var fifth = Fizzbuzz(100)[4];
    expect(fifth).to.equal('Buzz');
  });

});
