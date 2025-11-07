// challenge 1
let person = {
    name: "Nick",
    age: 27,
    country: "India"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()


// challenge 2
let age = 62

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}


// // challenge 3
// let largeCountry = ["India", "China", "Pakistan", "Indonesia"]

// for (let i=0; i< largeCountry.length; i++) {
//     console.log("- "+ largeCountry[i])
// }

//challenge 4
let largestCountry = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largestCountry.shift()
largestCountry.unshift("China")
largestCountry.pop()
largestCountry.push("Pakistan")

for (let i=0; i< largestCountry.length; i++) {
    console.log("- "+ largestCountry[i])
}


//challenge 5
//ROCK, PAPER, SECISSOR game


let hand = ["ROCK", "PAPER", "SECISSOR"]

function randomHand() {
    let number = Math.floor(Math.random() * 3)
    console.log(number)
    return hand[number]
}

let player1 = randomHand()
let player2 = randomHand()

console.log("Player 1 : " + player1 )
console.log("      ")
console.log("Player 2 : " + player2 )

if (player1 === hand[0] && player2 === hand[1] ) {
    console.log("palyer 2 wins!!!")
} else if (player1 === hand[0] && player2 === hand[2]) {
    console.log("player 1 wins!!!")
} else if (player1 === hand[1] && player2 === hand[2]) {
    console.log("player 2 wins!!!")
} else {
    console.log("draw!!!")
}

