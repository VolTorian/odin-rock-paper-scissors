console.log("Welcome to rock paper scissors!");

const CHOICES = ["rock", "paper", "scissors"];
const playerPointsDisplay = document.querySelector(".score.player");
const computerPointsDisplay = document.querySelector(".score.computer");
const roundDisplay = document.querySelector(".round-number");
let playerPoints = 0;
let computerPoints = 0;
let round = 1;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", playRound));


function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    const roundResult = document.querySelector(".round-result");
    
    console.log(`You chose ${playerChoice} against ${computerChoice}.`)
    roundResult.textContent = `You chose ${playerChoice} against ${computerChoice}.`;

    if (playerChoice === computerChoice) {
        roundResult.textContent += " You tied the round. Redo it.";;
    }
    else {
        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                roundResult.textContent += " You lost the round.";
                computerPoints++;
            }
            
            if (computerChoice === "scissors") {
                roundResult.textContent += " You won the round.";
                playerPoints++;
            }
            
        }
        else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                roundResult.textContent += " You lost the round.";
                computerPoints++;
            }

            if (computerChoice === "rock") {
                roundResult.textContent += " You won the round.";
                playerPoints++;
            }
        }
        else if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                roundResult.textContent += " You lost the round.";
                computerPoints++;
            }

            if (computerChoice === "paper") {
                roundResult.textContent += " You won the round.";
                playerPoints++;
            }
        }
        round++;
        console.log(playerPoints);
        console.log(computerPoints);
        playerPointsDisplay.textContent = `Player: ${playerPoints}`;
        computerPointsDisplay.textContent = `Computer: ${computerPoints}`;
    }
    if (round > 5) {
        gameEnd();
    }
}

function gameEnd() {
    console.log("Game finished");
    if (playerPoints > computerPoints) {
        console.log("Player wins");
    }
    else if (computerPoints > playerPoints) {
        console.log("Computer wins");
    }
    else {
        console.log("O.o wat there should not be a tie in a best of 5");
    }
}

function playerSelect(e) {
    console.log(e.target);
    if (e.target.id == "rock") {
        console.log("rock!!");
    }
    return e.target.id;

}

function game() {

    
    for (let i = 0; i < 1; i++) {
        console.log("Round " + (i + 1));
    }

    if (playerPoints === computerPoints) {
        console.log("You tied the game!")
    }
    else if (playerPoints > computerPoints) {
        console.log("You won the game!");
    }
    else if (playerPoints < computerPoints) {
        console.log("You lost the game!");
    }
}

game();