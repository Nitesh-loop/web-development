let homeNum = 0
let guestNum = 0
document.getElementById("scoreHome-el") = homeNum
document.getElementById("scoreGuest-el") = guestNum

function plusOneH() {
    homeNum += 1
    document.getElementById("scoreHome-el").textContent = homeNum
}

function plusOneG() {
    guestNum += 1
    document.getElementById("scoreGuest-el").textContent = guestNum
}

function plusTwoH() {
    homeNum += 2
    document.getElementById("scoreHome-el").textContent = homeNum
}

function plusTwoG() {
    guestNum += 2
    document.getElementById("scoreGuest-el").textContent = guestNum
}

function plusThreeH() {
    homeNum += 3
    document.getElementById("scoreHome-el").textContent = homeNum
}

function plusThreeG() {
    guestNum += 3
    document.getElementById("scoreGuest-el").textContent = guestNum
}

function restBtn() {
    homeNum = 0
    guestNum = 0
    document.getElementById("scoreHome-el").textContent = homeNum
    document.getElementById("scoreGuest-el").textContent = guestNum
}