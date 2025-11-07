let fighter = ["🦊","🐻","🐼","🐻‍❄️","🐤","🐛","🦀","🕷","🐢","🐦‍⬛","🐒","🐸","🦆","🐝","🦍"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function(){
    console.log("click!")
    console.log(fighter.length)
    let randomNumOne = Math.floor(Math.random() * fighter.length)
    let randomNumTwo = Math.floor(Math.random() * fighter.length)

    // console.log(fighter[randomNumOne] + " vs " + fighter[randomNumTwo] )
    stageEl.textContent = fighter[randomNumOne] + " vs " + fighter[randomNumTwo] 
})