var expect = require('chai').expect;
var BalancedBrackets = require("../app/BalancedBrackets").BalancedBrackets;


describe('BalancedBrackets()', function() {
  let t1Input = ('{[(]]}'),
      t2Input = ('{[(])}'),
      t3Input = ('{{[[(())]]}}'),
      t1 = BalancedBrackets(t1Input),
      t2 = BalancedBrackets(t2Input),
      t3 = BalancedBrackets(t3Input);

  it('should return No when there are no matching pair', function() {
    expect(t1).to.equal('NO');
    expect(t2).to.equal('NO');
    expect(t3).to.equal('YES');
  })

})
