console.log("Welcome to rock paper scissors!");

const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerChoiceRaw, computerChoice) {
    if (!playerChoiceRaw) {
        console.log("Make a selection!");
        return;
    }

    let playerChoice = playerChoiceRaw.toLowerCase();
    
    if (!CHOICES.includes(playerChoice)) {
        console.log("Invalid selection!");
        
        return;
    }
    
    console.log("You chose " + playerChoice + " against " + computerChoice + ".")

    if (playerChoice === computerChoice) {
        return "Tie";
    }
    else {
        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                return "ComputerWin";
            }
            
            if (computerChoice === "scissors") {
                return "PlayerWin";
            }
            
        }
        else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                return "ComputerWin";
            }

            if (computerChoice === "rock") {
                return "PlayerWin";
            }
        }
        else if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                return "ComputerWin";
            }

            if (computerChoice === "paper") {
                return "PlayerWin";
            }
        }
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));

        let playerChoice = prompt("Enter your selection for rock paper scissors:");
        let result = playRound(playerChoice, getComputerChoice());

        if (!result) {
            console.log("Bad round! Redo it!");
            i--;
        }
        if (result === "Tie") {
            console.log("You tied that round!")
        }
        if (result === "PlayerWin") {
            console.log("You won that round!")
            playerPoints++;
        }
        else if (result === "ComputerWin") {
            console.log("You lost that round!")
            computerPoints++;
        }

        console.log("Your points: " + playerPoints);
        console.log("Computer points: " + computerPoints);
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