function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a
    } else if (b >= a && b >= c) {
        return b
    } else {
        return c
    }
}

console.log(maxOfThree(3, 9, 15))
console.log(maxOfThree(10, 2, 7))
console.log(maxOfThree(4, 4, 8))