let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] //ordered array 
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return 5
}

function startGame() {
    renderGame()
}

function renderGame() {

    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    cardsEl.textContent = "Cards: "

    for (let i=0; i < cards.length; i++) {
        // cardsEl.textContent = " "
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

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

    messageEl.textContent = message

}


function newCard() {
    let card = getRandomCard()
    message = "New Card"
    messageEl.textContent = message
    sum += card
    cards.push(card)
    // console.log(cards)
    renderGame()
}