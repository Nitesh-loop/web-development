let num1 = 8
let num2 = 5

let total = 0

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function addNum () {
    total = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + total
}

function subNum () {
    total = num1 - num2
    document.getElementById("sum-el").textContent = "Sum: " + total
}

function divNum () {
    total = num1 / num2
    document.getElementById("sum-el").textContent = "Sum: " + total
}

function mulNum () {
    total = num1 * num2
    document.getElementById("sum-el").textContent = "Sum: " + total
}