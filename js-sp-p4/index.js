/*
    Requirements:
    1. Generate two random passowds when the user clicks the button
    2. Each password should be 15 characters long

    Stretch gaols
    1. Ability to set password length
    2. Add "copy-on-click"
    3. Toggle "symbols" and "numbers" on/off
*/

const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "<", ">", "?", ",", ".", "/"
];


let genPassEl = document.getElementById("gen-pass-btn");
let passwordLength = 15
let genPass1
let genPass2

let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")

let sliderEl = document.getElementById("length-slider")
let sliderValue = document.getElementById("length-value")

//generates the random index value from 1 to characters.length
function randomChar() {
    let outPut = Math.floor(Math.random() * characters.length)
    // console.log(outPut)
    return outPut
}

sliderEl.addEventListener("input", function() {
    let currentValue = sliderEl.value
    sliderValue.textContent = currentValue
    passwordLength = currentValue
})

function randomGen() {
    genPass1 = " "
    genPass2 = " "
    for (let i = 0; i < passwordLength; i++) {
        genPass1 += characters[randomChar()]
        genPass2 += characters[randomChar()]
    }
    console.log(genPass1)
    console.log(genPass2)

    return {genPass1, genPass2}
}

genPassEl.addEventListener("click", (event) => {
    console.log("Button is clicked")

    randomGen()

    passOneEl.textContent = genPass1
    passTwoEl.textContent = genPass2
})



// genPassEl.addEventListener("click", function {
//     console.log("Button is clicked")

//     randomGen()

//     passOneEl.textContent = genPass1
//     passTwoEl.textContent = genPass2
// })