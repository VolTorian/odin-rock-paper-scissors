console.log("Welcome to rock paper scissors!");

const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {

    return CHOICES[Math.floor(Math.random() * 3)];
}
