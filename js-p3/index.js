let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

function startGame() {
    if (sum <= 20 ) {
        message = "Do you want to draw a new card? :)"
    }
    else if (sum === 21) {
        message = "Wohooo! You've got BlackJack! :o"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game! :("
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}


