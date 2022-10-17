function getComputerChoice() {
    let randomNumber = Math.random() * 3;

    if(randomNumber < 1)
        return 'Rock';

    if(randomNumber < 2)
        return 'Paper';

    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
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