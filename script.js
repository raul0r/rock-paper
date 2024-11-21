let computerScore = 0;
let userScore = 0;
let computerChoice;
let userChoice;
let luckyChoice;

document.getElementById("myButton").addEventListener("click", gameStart);

function gameStart() {
    // Reset scores and UI
    computerScore = 0;
    userScore = 0;
    document.getElementById("cpuScore").textContent = "0";
    document.getElementById("userScore").textContent = "0";
    document.getElementById("winnerBox").style.display = "none";

    // Start the game loop
    while (computerScore < 3 && userScore < 3) {
        getComputerChoice(); // Generate computer choice
        userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase(); // Get user choice

        // Validate user input
        if (!["rock", "paper", "scissors"].includes(userChoice)) {
            alert("Invalid choice! Please choose Rock, Paper, or Scissors.");
            continue;
        }

        // Play a round and update scores
        const result = play(computerChoice, userChoice);

        // Update the scores in the UI
        document.getElementById("cpuScore").textContent = computerScore;
        document.getElementById("userScore").textContent = userScore;

        // Show round result in an alert (can also display it in the UI)
        alert(`Computer chose: ${computerChoice}. You chose: ${userChoice}. ${result}`);
    }

    // Display the winner
    const winnerMessage = userScore === 3 ? "Congratulations! You win!" : "Computer wins! Better luck next time.";
    document.getElementById("winnerMessage").textContent = winnerMessage;
    document.getElementById("winnerBox").style.display = "block";
}

// Generate the computer's choice
function getComputerChoice() {
    luckyChoice = Math.random();
    if (luckyChoice >= 0.66) {
        computerChoice = "rock";
    } else if (luckyChoice >= 0.33) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}

// Compare choices and determine the winner
function play(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        return "It's a tie!";
    }

    if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
    ) {
        computerScore++;
        return "Computer wins this round!";
    } else {
        userScore++;
        return "You win this round!";
    }
}
