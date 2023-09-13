console.log("Welcome to rock paper scissors!");

const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    //
    const roundResult = document.querySelector(".round-result");
    
    console.log(`You chose ${playerChoice} against ${computerChoice}`)
    roundResult.textContent = `You chose ${playerChoice} against ${computerChoice}.`;

    if (playerChoice === computerChoice) {
        roundResult.textContent += " You tied the round.";
        return "Tie";
    }
    else {
        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                roundResult.textContent += " You lost the round.";
                return "ComputerWin";
            }
            
            if (computerChoice === "scissors") {
                roundResult.textContent += " You won the round.";
                return "PlayerWin";
            }
            
        }
        else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                roundResult.textContent += " You lost the round.";
                return "ComputerWin";
            }

            if (computerChoice === "rock") {
                roundResult.textContent += " You won the round.";
                return "PlayerWin";
            }
        }
        else if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                roundResult.textContent += " You lost the round.";
                return "ComputerWin";
            }

            if (computerChoice === "paper") {
                roundResult.textContent += " You won the round.";
                return "PlayerWin";
            }
        }
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
    let playerPoints = 0;
    let computerPoints = 0;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => button.addEventListener("click", playRound));
    
    for (let i = 0; i < 1; i++) {
        console.log("Round " + (i + 1));

        // let playerChoice = prompt("Enter your selection for rock paper scissors:");
        // let result = playRound(playerChoice, getComputerChoice());

        // if (!result) {
        //     console.log("Bad round! Redo it!");
        //     i--;
        // }
        // if (result === "Tie") {
        //     console.log("You tied that round!")
        // }
        // if (result === "PlayerWin") {
        //     console.log("You won that round!")
        //     playerPoints++;
        // }
        // else if (result === "ComputerWin") {
        //     console.log("You lost that round!")
        //     computerPoints++;
        // }

        // console.log("Your points: " + playerPoints);
        // console.log("Computer points: " + computerPoints);
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