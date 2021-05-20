function getPlayerChocie() {
    const buttons = document.querySelectorAll('#player-options');
    buttons.forEach(button => {
        button.addEventListener('click', playRound);
    });
}

function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber];
}
function compareChoices(playerSelection, computerSelection) {

    let result;
    switch (playerSelection) {
        case "rock": if (computerSelection == "rock") {
            result = "draw";
            break;
        } else if (computerSelection == "paper") {
            result = "lose";
            break;
        } else if (computerSelection == "scissors") {
            result = "win";
            break;
        }

        case "paper": if (computerSelection == "rock") {
            result = "win";
            break;
        } else if (computerSelection == "paper") {
            result = "draw";
            break;
        } else if (computerSelection == "scissors") {
            result = "lose";
            break;
        }

        case "scissors": if (computerSelection == "rock") {
            result = "lose";
            break;
        } else if (computerSelection == "paper") {
            result = "win";
            break;
        } else if (computerSelection == "scissors") {
            result = "draw";
            break;
        }
    }
    return result;
}

function declareWinner(winner){
    console.log(`${winner} wins`);
    const winnerBoard = document.getElementById('winner-board');
    winnerBoard.textContent= `${winner} wins`;
    tryAgain();
}

function tryAgain(){
    const tryAgain = document.getElementById('try-again');
    tryAgain.textContent="Try Again?";
    tryAgain.addEventListener('click',(e)=>{
    window.location.reload();
    });
}

function game(roundResult) {
    if (roundResult == "win") {
        userScore++;
    } else if (roundResult == "lose") {
        computerScore++;
    }
    updateScoreBoard(userScore,computerScore);

    if (userScore == 5) {
        declareWinner("User");
        resetScore();
    } else if (computerScore == 5) {
        declareWinner("Computer");
        resetScore();
    }
}

function updateScoreBoard(userScore,computerScore){
    const scoreBoard = document.getElementById('score-board');
    scoreBoard.textContent= `${userScore} - ${computerScore}`;
}

function resetScore(){
    const buttons = document.querySelectorAll('#player-options');
    buttons.forEach(button => {
        button.removeEventListener('click',playRound);
    });
}

function playRound(e) {
    let playerSelection = e.target.dataset.selection;
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let roundResult = compareChoices(playerSelection, computerSelection);
    console.log(roundResult);
    
    game(roundResult);
}



let userScore = 0, computerScore = 0;

updateScoreBoard(0,0);
getPlayerChocie();
