let firstCard = 0
let secondCard = 0
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame() {
    if (sum <= 20 ) 
        message = "Do you want to draw a new card? :)"
    else if (sum === 21) {
        message = "Wohooo! You've got BlackJack! :o"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game! :("
        isAlive = false
    }
}