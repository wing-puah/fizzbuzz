const expect = require('chai').expect;
const sparseArr = require("../app/sparseArr").sparseArr;

describe('sparseArr()', function() {
  let t1 = sparseArr(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']),
      t2 = sparseArr(['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'], ['abcde', 'sdaklfj', 'asdjf', 'na', 'basd']),
      t3 = sparseArr(['def', 'de', 'fgh'], ['de', 'lmn', 'fg']);

  it('should return an array', function(){
    expect(t1).to.be.an('array');
    expect(t2).to.be.an('array');
    expect(t3).to.be.an('array');
  })

  it('should have an output of the length of queries', function() {
    expect(t1.length).equal(3);
    expect(t2.length).equal(5);
    expect(t3.length).equal(3);
  });

  it('should detect the number of times the first query appear in the string', function() {
    expect(t1[0]).to.equal(2);
    expect(t2[0]).to.equal(1);
    expect(t3[0]).to.equal(1);
  })

  it('should not detect the queries that appear in the strings partially', function() {
    expect(t1[2]).to.equal(0);
    expect(t2[4]).to.equal(0);
    expect(t3[2]).to.equal(0);
  })

});
