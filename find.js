/*function firstUnder(numbers, limit){
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= limit)
    return numbers[i]
  }
}
*/
// console.log(firstUnder(, 10))

const arr=[15, 12, 26, 236, 86];
const limit=14;
// console.log(arr.find((el)=> el <= limit))

function startsWith(strings, letter){
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === letter)
    return strings[i]
  }
}
const strings = ["lemon", "papaya", "apple", "cherry"];
const letter = 'c';
// console.log(startsWith(strings, letter));

// console.log(strings.find((el)=> el[0] === letter))
