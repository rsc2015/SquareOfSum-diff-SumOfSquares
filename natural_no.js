console.log("natural_no.js");

//Challenge #6
//What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first 
//ten natural numbers?
var SumOfAllSquares = 0;

var sumOf_10nos = 0;

for (var i = 0; i <= 10; i++) {
    
    SumOfAllSquares += Math.pow(i, 2);
    console.log(SumOfAllSquares);
};

for (var i = 1; i <= 10; i++) {
    sumOf_10nos += i;
    console.log(sumOf_10nos);
};

console.log("sum of the squares: ", SumOfAllSquares);
console.log("square of the sum: ", Math.pow(sumOf_10nos, 2));

var diff_both =  Math.pow(sumOf_10nos, 2) - SumOfAllSquares;
console.log("the difference between the both: ", diff_both);



           