
// Q1
let x = 10;
function test() {
let x = 20;
console.log(x);
}
test();
console.log(x);
/* output:
    20
    10
*/

/************************************************************************/

// Q2
if (true) {
    var a = 1;
    let b = 2;
}
console.log(a);
console.log(b);
/* output :
    1
    error 
*/

/************************************************************************/

/* Q3 */
let count = 0;
function increase() {
    count = count + 1;
}
function reset() {
    let count = 0;
}
increase();
increase();
reset();
console.log(count);
/* output :
    2
*/

/************************************************************************/

// Q4
function addAndPrint(a, b) {
    console.log(a + b);
}
let result = addAndPrint(2, 3);
console.log(result);
/* 
   expected: 5

   output:
   5
   undefined
   why: the function doesn't have a return so it doesn't have a value at line 53
*/

/************************************************************************/

// Q5
console.log(sayHi());
console.log(sayBye());
function sayHi() {
    return "Hi";
}
const sayBye = () => "Bye";
/* output:
    hi
    error
*/

/************************************************************************/

// Q6
function check(n) {
if (n > 10) {
    return "Big";
}
console.log("Checking...");
    return "Small";
}
console.log(check(50));
console.log(check(5));
/* output:
    big
    checking...
    small
*/