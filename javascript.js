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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = ""; 

        while(!isValidSelection(playerSelection)){
            playerSelection = prompt("Enter your selection for this round!");
        }

        let computerSelection = getComputerChoice();

        console.log("You selected " + playerSelection);
        console.log("Computer selected " + computerSelection);

        let gameResult = playRound(playerSelection, computerSelection);

        if(gameResult === 0){
            console.log("this round ends in tie!");
        }

        if(gameResult === 1){
            playerScore++;
            console.log("You win this round!");
        }
            
        if(gameResult === 2){
            computerScore++;
            console.log("You lose this round!");
        }

        console.log("----");
    }

    console.log("Game finished!");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    if(playerScore === computerScore)
        console.log("The game ended in tie!");

    if(playerScore > computerScore)
        console.log("You win the game!");
    else
        console.log("You lose the game!");
}