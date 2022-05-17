
// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);


function myForEach(el) {
  for(let i = 0; i < el.length; i++){
    console.log(el[i])
  }  
}
// console.log(myForEach([12, 15, 26, 236, 86]))

function myMap(el) {
  let newArr= []
  for(let i = 0; i < el.length; i++){
    newArr.push(el[i]*2)
  }
  return  newArr; 
}
// console.log(myMap([12, 15, 26, 236, 86]))

function myFilter(el) {
  let newArr= []
  for(let i = 0; i < el.length; i++){
    if(el[i]%2 === 0) newArr.push(el[i])
  }
  return  newArr; 
}
// console.log(myFilter([12, 15, 26, 236, 86]))

function myReduce(el) {
  let sum = 0;
  for(let i = 0; i < el.length; i++){
    if(el[i]%2 === 0) 
    sum+=el[i];
  }
  return  sum;
}
// console.log(myReduce([12, 15, 26, 236, 86]))

function myFind(el) {
  for(let i = 0; i < el.length; i++){
    if (el[i] % 5 === 0)
    return el[i]; 
  }
}
// console.log(myFind([12, 15, 26, 86]))

function myEvery(el) {
  for(let i of el){
    if(i % 2 !== 0) return false;
  }
  return true
}
// console.log(myEvery([12, 15, 26, 236, 86]))

function mySome(el) {
  for(let i of el){
    if(typeof(i) !== 'number') return true;
  } 
  return false;
}
console.log(mySome([12, 15, 26, '236', 86]))

