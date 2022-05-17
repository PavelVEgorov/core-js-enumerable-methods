function exclamations(strings){
  let loudStrings = []
  for (let i = 0; i < strings.length; i++) {
  loudStrings.push(strings[i].toUpperCase() + '!')
  }
  return loudStrings
}

console.log(exclamations(["lemon", "papaya", "apple", "cherry"]))

const words = ["lemon", "papaya", "apple", "cherry"]; 

const newWords = words.map((item, index, arr) => item.toUpperCase() + '!');
console.log(newWords)
  

function squareAll(numbers){
  let squares = []
  for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i]**2)
  }
  return squares
}

console.log(squareAll([15, 12, 26, 236, 86]))

const numbers = [15, 12, 26, 236, 86]; 

const newNumbers = numbers.map((item, index, arr) => item**2);
console.log(newNumbers)


function firstLetters(words){
  let letters = []
  for (let i = 0; i < words.length; i++) {
     letters.push(words[i][0])
  }
  return letters
}

console.log(firstLetters(["Xemon", "Yapaya", "Upple", "!herry"]))

const words = ["Xemon", "Yapaya", "Upple", "!herry"]; 

const newWords = words.map((words) => words[0]);
console.log(newWords)
