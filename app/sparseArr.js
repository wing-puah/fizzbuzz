// https://www.hackerrank.com/challenges/sparse-arrays/problem

function sparseArr(strings, queries) {
  let matchArr = [];

  queries.map((el) => {
    matchArr.push(strings.filter(x => x === el).length);
  })

  return matchArr;
}

module.exports.sparseArr = sparseArr;
