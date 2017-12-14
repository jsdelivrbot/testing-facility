let result = 0;

for (let i = 99999999; i < 99999999999; i++) {
    let str = (i * i) + '';

    if (str[0] == '1' && str[2] == '2' && str[4] == '3' &&
        str[6] == '4' && str[8] == '5' && str[10] == '6' &&
        str[12] == '7' && str[14] == '8' && str[16] == '9'
        && str[18] == '0') {
            result = i;
            return;
        }
}

console.log(result);