function getComputerChoice() {
    let randomNumber = Math.random() * 3;

    if(randomNumber < 1)
        return 'Rock';

    if(randomNumber < 2)
        return 'Paper';

    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    console.log("PLAY " + playerSelection);
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
        return 0;

    let playerWins = (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") 
    || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
    || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper");

    if(playerWins)
        return 1;

    return 2;
}

function isValidSelection(selection) {
    return selection.toLowerCase() === "rock" || selection.toLowerCase() === "paper" || selection.toLowerCase() === "scissors";
}

let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let scoreContainer = document.querySelector("#score-container");

const playFunction = (playerSelection) => {
    let computerChoice = getComputerChoice();

    let roundResult = playRound(playerSelection, computerChoice);

    switch(roundResult){
        case 1: playerScore++; break;
        case 2: computerScore++; break;
    }

    scoreContainer.textContent = "Player Score: " + playerScore + " | Computer Score: " + computerScore;

    if(playerScore >= 5)
        scoreContainer.textContent = scoreContainer.textContent + " - Player wins!";

    if(computerScore >=5)
        scoreContainer.textContent = scoreContainer.textContent + " - Computer wins!";
}

rockButton.addEventListener('click', () => playFunction("Rock"));
paperButton.addEventListener('click', () => playFunction("Paper"));
scissorsButton.addEventListener('click', () => playFunction("Scissors"));