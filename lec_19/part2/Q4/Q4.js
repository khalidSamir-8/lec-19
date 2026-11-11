function calculator () {
    let firstNum = Number(prompt("first number: "))
    let operator = (prompt("operator(+ - * /): "))
    let secondNum =Number(prompt("second number: "))

    switch (operator) {
        case "+":
            alert(firstNum + secondNum)
            break;
        case "-":
            alert(firstNum - secondNum)
            break;
        case "*":
            alert(firstNum * secondNum)
            break;
        case "/":
            if (secondNum == 0) {
                alert("invalid")
            } else {
                alert(firstNum / secondNum)
            }
            break;

        default:
            break;
    }
}

while (true) {
    calculator()
}