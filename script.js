const buttons = document.querySelectorAll("button")
const resultEl = document.querySelector(".result")
const userScoreEl = document.getElementById("user-score")
const computerScoreEl = document.getElementById("computer-score")
const selectedMoves = document.querySelector(".select-move")
const youEl = document.querySelector(".you")
const computerEl = document.querySelector(".computer")


let userScore = 0
let computerScore = 0

buttons.forEach(button => {
    button.addEventListener("click",() => {
        yourMove(button.id,button.textContent)
      resultEl.textContent = computerPlay(button.id)
    })
})

function computerPlay(userSelected){

    const computerChoices = ['rock','paper','scissors']
    const buttonCode = ['&#x1f44a','&#x1f590','&#x270c']
    const computerMove = Math.floor(Math.random()*computerChoices.length)
    const computerSelected = computerChoices[computerMove]
    computerMoveFun(computerSelected,buttonCode[computerMove])
    selectedMoves.textContent = `${userSelected} -------------------- ${computerSelected}`
    if(userSelected === computerSelected) {
        return "Tie !"
    }  else if((userSelected === 'rock' && computerSelected === 'scissors') ||
    (userSelected === 'paper' && computerSelected === 'rock') || (userSelected === 'scissors' && computerSelected === 'paper')){
        userScore++
        userScoreEl.textContent = userScore
        return 'You win'
    } else    {
        computerScore++
        computerScoreEl.textContent = computerScore
        return "computer wins"
    }
}

function yourMove(x,y){
    youEl.textContent = ''
    const youBtn = document.createElement("button")
    youBtn.classList.add(`${x}`)
    youBtn.innerHTML = `${y}`
    youEl.appendChild(youBtn)
    
}

function computerMoveFun(x,y){
    computerEl.textContent = ''
    const computerBtn = document.createElement("button")
    computerBtn.classList.add(`${x}`)
    computerBtn.innerHTML = `${y}`
    computerEl.appendChild(computerBtn)
}