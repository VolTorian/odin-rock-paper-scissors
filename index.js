console.log("Welcome to rock paper scissors!");

const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerChoiceRaw, computerChoice) {
    let playerChoice = playerChoiceRaw.toLowerCase();
    
    if (!CHOICES.includes(playerChoice)) {
        console.log("Invalid selection!");
        
        return "invalid";
    }
    
    console.log("You chose " + playerChoice + " against " + computerChoice + ".")

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else {
        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose!");
            }

            if (computerChoice === "scissors") {
                console.log("You win!");
            }
            
        }
        else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("You lose!");
            }

            if (computerChoice === "rock") {
                console.log("You win!");
            }
        }
        else if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose!");
            }

            if (computerChoice === "paper") {
                console.log("You win!");
            }
        }
    }
}

let playerChoice = prompt("Enter your selection for rock paper scissors:");
playRound(playerChoice, getComputerChoice());