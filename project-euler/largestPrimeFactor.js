let num = 10086647;

for (let i = 2; i < 10000; i++) {
    if (num % i === 0) {
        num = num / i;
        console.log(num);
    }
}