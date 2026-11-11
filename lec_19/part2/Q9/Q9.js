function isPrime(num) {
    if (num < 2) {
        return false
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j == 0) {
            return false
            }
        }
        return true
    }
}

function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            document.write(`${i} <br>`)
        }
    }
}

limit = Number(prompt())
printPrimes(limit)