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

console.log(`Best of 5: round ${round}`);

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    const roundResult = document.querySelector(".round-result");

    console.log(`You chose ${playerChoice} against ${computerChoice}.`);
    roundResult.textContent = `You chose ${playerChoice} against ${computerChoice}.`;

    if (playerChoice === computerChoice) {
        roundResult.textContent += " You tied the round. Redo it.";
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
        console.log(`Player: ${playerPoints}`);
        console.log(`Computer: ${computerPoints}`);
        playerPointsDisplay.textContent = `Player: ${playerPoints}`;
        computerPointsDisplay.textContent = `Computer: ${computerPoints}`;

        if (Math.max(playerPoints, computerPoints) == 3) { //best of, not first to 5 (first to 3)
            gameEnd();
        } else{
            round++;
            console.log(`Best of 5: round ${round}`);
            roundDisplay.textContent = `Best of 5: round ${round}`;
        }
    }
}

function gameEnd() {
    console.log("Game finished");
    const gameResult = document.createElement("div");
    if (playerPoints > computerPoints) {
        console.log("Player wins");
    }
    else if (computerPoints > playerPoints) {
        console.log("Computer wins");
    }
    else {
        console.log("O.o wat there should not be a tie in a best of 5");
    }
    buttons.forEach((button) => button.disabled = true);

}

function playerSelect(e) {
    console.log(e.target);
    if (e.target.id == "rock") {
        console.log("rock!!");
    }
    return e.target.id;

}

// function game() {

    
//     for (let i = 0; i < 1; i++) {
//         console.log("Round " + (i + 1));
//     }

//     if (playerPoints === computerPoints) {
//         console.log("You tied the game!")
//     }
//     else if (playerPoints > computerPoints) {
//         console.log("You won the game!");
//     }
//     else if (playerPoints < computerPoints) {
//         console.log("You lost the game!");
//     }
// }

// game();