/* A palindromic number reads the same both ways. The largest palindrome made 
from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
 */

let num1 = 91;
let num2 = 99;
let sum = 993 * 913;

let reversed = sum.toString().split('').reverse().join('');
let sum2 = Number(reversed);

console.log(sum);

// for (let i = 999; i > 100; i--) {
//     for (let j = 999; j > 800; j--) {
//         if ((i * j) === Number((i * j).toString().split('').reverse().join(''))) {
//             console.log(i, j);
//         }
//     }
// }
