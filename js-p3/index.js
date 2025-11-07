
let cards = [] //ordered array 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Nick",
    chips: 155,
    // sayHello: function() {                                   //Anynomous fuction
    //     console.log("hellooooo!!!")          
    // }
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNum = Math.floor( Math.random() * 13) + 1
    if (randomNum === 1) {
        randomNum = 11
        return randomNum
    }
    else if (randomNum > 10){
        randomNum = 10
        return randomNum
    }
    else {
        return randomNum
    }
    
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
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
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if( isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
    message = "New Card"
    messageEl.textContent = message
    sum += card
    cards.push(card)
    // console.log(cards)
    renderGame()
    }
    
}