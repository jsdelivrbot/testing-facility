//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
//we can see that the 6th prime is 13.
//What is the 10 001st prime number?

let arr = [2,3,5,7,11,13];
let count = 0;

for (let i = 14; i < 999999999999; i++) { 
    count = 0;
    for (j = 1; j < i; j++) {
        if (i % j === 0) {
            count ++;
        }
    }
    if (count === 1) {
        arr.push(i);
    }

    if (arr.length === 10003) {
        console.log(arr[10000]);
        return;
    }
}