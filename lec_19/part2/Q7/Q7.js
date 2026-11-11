function power(base, exponent = 2) {
    num = 1
    for (let i = 1; i <= exponent; i++) {
        num *= base
    }
    return num
}

while (true) {
    n = Number(prompt("base"))
    e = (prompt("exponent"))
    if (e == "") {e = undefined}
    alert(power(n, e))
}
