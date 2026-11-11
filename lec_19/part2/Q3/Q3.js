function getGrade(degree) {
    if (0 > degree || degree > 100) {return "invalid"}

    if (degree >= 85) {return "excellent"}
    if (degree >= 75) {return "very good"}
    if (degree >= 60) {return "good"}
    if (degree >= 50) {return "pass"}
    if (degree < 50)  {return "fail"}
}

let degree = Number(prompt("degree"))
console.log(getGrade(degree))