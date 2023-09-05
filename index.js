console.log("Welcome to rock paper scissors!");

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    return choices[Math.floor(Math.random() * 3)];
}
