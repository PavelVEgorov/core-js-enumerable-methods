/*
function oddNumbers(nums) {
  let odds = []
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
      odds.push(nums[i]);
    }
  }
  return odds
}
console.log(oddNumbers([15, 12, 26, 236, 87]))

let nums = [15, 12, 26, 236, 87];
function getOdd(num){
  return num % 2 === 1;
}
console.log(nums.filter(getOdd))

let result = nums.filter((el) =>{return el %  2 ===1} )
console.log(result)
*/


function longStrings(strings, minimumLength = 0){
  let longs = []
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minimumLength)
    longs.push(strings[i])
  }
  return longs
}

console.log(longStrings(["lem", "papa", "apple", "cherry"],2));

const minimumLength = 2;
const strings = ["lem", "papa", "apple", "cherry"];

let result = strings.filter((elem)=>elem.length >= minimumLength)
console.log(result);
