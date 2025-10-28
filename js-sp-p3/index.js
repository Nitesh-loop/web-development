let homeNum = 0
let guestNum = 0
document.getElementById("scoreHome-el") = homeNum
document.getElementById("scoreGuest-el") = guestNum

function plusOneH() {
    addOne()
    document.getElementById("scoreHome-el").textContent = homeNum
}

function plusOneG() {
    addOne()
    document.getElementById("scoreGuest-el").textContent = homeNum
}

function addOne() {
    homeNum += 1
}