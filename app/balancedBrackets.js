// https://www.hackerrank.com/challenges/balanced-brackets/problem

function BalancedBrackets(el) {
  let splitEl = el.split(''),
      elHalf = splitEl.length/2 ,
      firstHalf = splitEl.slice(0, elHalf),
      secondHalf = splitEl.slice(elHalf),
      reverse = secondHalf.reverse(),
      bracketMapped = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']']
      ]),
      matched = 'YES';

  if(splitEl.length % 2 !== 0) {
    return matched = 'NO';
  }

  // Need to remove immediate closing brackets

  firstHalf.map((el, idx) => {
    if(bracketMapped.get(el) != reverse[idx]) {
      return  matched = 'NO';
    }
  })

  return matched;
}

module.exports.BalancedBrackets = BalancedBrackets;
