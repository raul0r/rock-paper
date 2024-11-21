let computerChoice;
let userChoice;
let computerScore; 
let userScore;
let luckyChoice;

document.getElementById("myButton").addEventListener("click", gameStart);

function gameStart() {
    //will work on this later
}

//Create computer choice with function

function getComputerChoice() {
    luckyChoice = Math.random();
    if luckyChoice >= 0.66 {
        computerChoice = "Rock";
    }
    else if luckyChoice >= 0.33 {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scisors";
    }
}


//Initialize game

console.log("Welcome to the game. Please press enter to continue");
console.log("The computer choice is ready, please enter your input");



//Ask for user choice 
prompt()

//Compare the choices

//winner gets +1 point 

//Repeat 

//Game is complete when one user hits 3 points