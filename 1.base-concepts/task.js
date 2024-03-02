"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0){
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  } else {
    let x = (-b + Math.sqrt(d)) / (2 * a);
    let y = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x, y);
    return arr;
  } 
}

console.log(solveEquation(2, 42, 8));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let S = amount - contribution;
  let payment = S * (p + (p / (((1 + p) ** countMonths) - 1)));
  let totalAmount = payment * countMonths;
  return totalAmount.toFixed(2);
}  

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));