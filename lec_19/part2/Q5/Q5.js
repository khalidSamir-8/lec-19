function sumRange(start, end) {
    let sum = 0
    for (let i = start; i<= end; i++) {
        sum += i
    }
    return sum
}

while (true) {
    let a = Number(prompt("start"))
    let b = Number(prompt("end"))
    alert(sumRange(a, b))
}