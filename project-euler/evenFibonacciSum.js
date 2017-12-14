let arr = [1,2];
let sum = 0;

for (let i = 3; i < 4000000; i++) {
    if (i === arr[arr.length - 1] + arr[arr.length - 2]) {
        arr.push(i);
    }
}

for (let j = 0; j < arr.length; j++ ) {
    if (arr[j] % 2 === 0 ) {
        sum += arr[j];
    }
}

console.log(sum);