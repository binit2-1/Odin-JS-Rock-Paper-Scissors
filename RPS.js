let humanScore = 0
let computerScore = 0
let quit = "quit"

function getComputerChoice(){
    let a = Math.random()
    if (a < 0.33){
        console.log("Computer chose Rock")
        return 1
    }
    else if (a < 0.66){
        console.log("Computer chose Paper")
        return 2
    }
    else{
        console.log("Computer chose Scissors")
        return 3
    }
}

function playRound(){
    let a = prompt("Enter your choice: Rock, Paper, or Scissors")
    if (a === quit){
        alert("thanks for playing!")
        console.log("thanks for playing!")
        return 0
    }
    else if(a === "Rock" || a === "rock" || a === "ROCK"){
        console.log("You chose Rock")
        return 1
    }
    else if(a === "Paper" || a === "paper" || a === "PAPER"){
        console.log("You chose Paper")
        return 2
    }
    else if(a === "Scissors" || a === "scissors" || a === "SCISSORS"){
        console.log("You chose Scissors")
        return 3
    }
    else{
        alert("Invalid choice, please try again")
        console.log("Invalid choice, please try again")
        return playRound()
    }
}

function getScore() {
    const playerChoice = playRound()

    if (playerChoice === 0) {
        return false // to indicate quitting
    }

    const computerChoice = getComputerChoice()

    if (playerChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (playerChoice === 1 && computerChoice === 3) ||
        (playerChoice === 2 && computerChoice === 1) ||
        (playerChoice === 3 && computerChoice === 2)
    ) {
        humanScore++
        console.log("You win this round!")
    } else {
        computerScore++
        console.log("Computer wins this round!")
    }

    console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`)
    return true 
}

function gameLoop() {
    for (let i = 0; i < 5; i++) {
        const continueGame = getScore()
        if (!continueGame) break
    }
    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!")
    } else {
        console.log("It's a tie!")
    }
}

gameLoop()