let sum = 0;
let squareOfSums = 0;
let sumOfSquares = 0;
let square = (num) => num * num;

for (var i = 1; i <= 100; i ++) {
    sum += i;
    sumOfSquares += square(i);
}

squareOfSums = square(sum);

console.log(squareOfSums - sumOfSquares);