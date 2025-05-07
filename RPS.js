const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const exitBtn = document.getElementById('exitButton');
const resultScreen = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

function computerChoice(){
    randomNumber=Math.floor(Math.random()*3);
    if(randomNumber===0){
        return 'rock';
    }
    else if(randomNumber===1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function playRound(player){
    computer = computerChoice();
    winner="";
    resultScreen.innerHTML = "";

    resultScreen.innerHTML += "<p>Player chose: " + player + "</p>";
    resultScreen.innerHTML += "<p>Computer chose: " + computer + "</p>";

    if (player===computer){
        winner="It's a tie!";
    }
    else if ((player==="rock" && computer==="scissors") || (player==="paper" && computer==="rock") || (player==="scissors" && computer==="paper")){
        winner="You win!";
        playerScore++;
    }
    else{
        winner="You lose!";
        computerScore++;
    }

    resultScreen.innerHTML += "<p>" + winner + "</p>";
    
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}

rockBtn.addEventListener('click', () => {
    playRound('rock');
});
paperBtn.addEventListener('click', () => {
    playRound('paper');
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultScreen.innerHTML = "";
}


exitBtn.addEventListener('click', () => {
    if(playerScore>computerScore){
        alert("You win the game!");
    }
    else if(playerScore<computerScore){
        alert("You lose the game!");
    }
    else{
        alert("It's a tie!");
    }
    // window.close();
    resetGame();
});



