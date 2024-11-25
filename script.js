// Game variables
let computerScore = 0;
let userScore = 0;

// DOM elements
const cpuScoreBox = document.getElementById("cpuScore");
const userScoreBox = document.getElementById("userScore");
const winnerBox = document.getElementById("winnerBox");
const winnerMessage = document.getElementById("winnerMessage");
const resetButton = document.getElementById("resetButton");
const historyList = document.getElementById("history");
const choiceButtons = document.querySelectorAll(".choice");

// Choices for the game
const choices = ["rock", "paper", "scissors"];

// Event listeners for choice buttons
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        playRound(userChoice);
    });
});

// Play one round of the game
function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    // Update scores
    if (result === "win") userScore++;
    if (result === "lose") computerScore++;

    // Update UI
    updateScores();
    addHistory(userChoice, computerChoice, result);

    // Check for game over
    if (userScore === 3 || computerScore === 3) {
        displayWinner();
    }
}

// Generate computer's choice randomly
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine the winner of the round
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "tie";
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    }
    return "lose";
}

// Update the scores in the UI
function updateScores() {
    cpuScoreBox.textContent = computerScore;
    userScoreBox.textContent = userScore;

    // Highlight the leading score
    if (computerScore > userScore) {
        cpuScoreBox.classList.add("leading");
        userScoreBox.classList.remove("leading");
    } else if (userScore > computerScore) {
        userScoreBox.classList.add("leading");
        cpuScoreBox.classList.remove("leading");
    } else {
        cpuScoreBox.classList.remove("leading");
        userScoreBox.classList.remove("leading");
    }
}

// Add a history entry for the round
function addHistory(userChoice, computerChoice, result) {
    const resultText =
        result === "win" ? "You won!" : result === "lose" ? "CPU won!" : "It's a tie!";
    const listItem = document.createElement("li");
    listItem.textContent = `You chose ${capitalize(userChoice)}, CPU chose ${capitalize(
        computerChoice
    )}. ${resultText}`;
    historyList.prepend(listItem); // Add new history item at the top
}

// Display the winner of the game
function displayWinner() {
    const finalMessage =
        userScore === 3 ? "🎉 Congratulations! You win the game! 🎉" : "💻 CPU wins the game! Better luck next time.";
    winnerMessage.textContent = finalMessage;
    winnerBox.style.display = "block";

    // Disable buttons and show reset
    toggleButtons(false);
    resetButton.style.display = "block";
}

// Reset the game to start over
resetButton.addEventListener("click", resetGame);

function resetGame() {
    // Reset scores and UI
    computerScore = 0;
    userScore = 0;
    updateScores();
    winnerBox.style.display = "none";
    historyList.innerHTML = ""; // Clear history

    // Enable buttons and hide reset
    toggleButtons(true);
    resetButton.style.display = "none";
}

// Enable or disable the choice buttons
function toggleButtons(enable) {
    choiceButtons.forEach((button) => {
        button.disabled = !enable;
    });
}

// Capitalize a string
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
