function sum(arrayNumbers, sum = 0){
  for (let i = 0; i < arrayNumbers.length; i++ ){
    sum += arrayNumbers[i];
    // console.log(undefined);
  }
  return sum
}

console.log(sum([1, 2, 3, 4]))

const summer = [1, 2, 3, 4];

const result = summer.reduce(function(counts, number) {
	counts += number;
	return counts;
}, 0)

// console.log(result);
