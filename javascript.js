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
        return "Tie!";

    let playerWins = (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") 
    || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
    || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper");

    if(playerWins)
        return "You win! " + playerSelection + " beats " + computerSelection + "!";

    return "You lose! " + playerSelection + " loses against " + computerSelection + "!";
}