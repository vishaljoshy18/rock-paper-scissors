function computerPlay() {
    const  computerOptions = ["rock", "paper", "scissors"];
    return computerOptions[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
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

function game() {
    let userScore = 0, computerScore = 0;
    let condition=true;
    let winner;

    while (condition) {
        let computerSelection = computerPlay();
        console.log(computerSelection);
        let playerSelection = prompt("Rock Paper or Scissors?")
        playerSelection = playerSelection.toLowerCase();
        result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result == "win"){
            userScore++;
        }else if(result == "lose"){
            computerScore++;
        }

        if(userScore == 5){
            winner="user";
            condition= false;
        }else if (computerScore == 5){
            winner="computer";
            condition= false;
        }
        console.log(`user ${userScore}- ${computerScore} AI`);
    }
    return winner;
}

winner=game();
console.log(winner);
