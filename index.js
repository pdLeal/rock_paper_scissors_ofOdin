function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

let playerScore = 0;
let pcScore = 0;

function singleRound(playerSelection, computerSelection) {
    const results = document.querySelector(".results");
    const para = document.createElement("p");

    if (playerSelection === computerSelection) {
        para.textContent = `Draw! You and Incognitos both chose ${playerSelection} --- Won: ${playerScore} Lost: ${pcScore}`;
        results.appendChild(para);
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        playerScore += 1;
        para.textContent = `You Win! ${playerSelection} beats ${computerSelection} --- Won: ${playerScore} Lost: ${pcScore}`;
        results.appendChild(para);
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        playerScore += 1;
        para.textContent = `You Win! ${playerSelection} beats ${computerSelection} --- Won: ${playerScore} Lost: ${pcScore}`;
        results.appendChild(para);
    } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        playerScore += 1;
        para.textContent = `You Win! ${playerSelection} beats ${computerSelection} --- Won: ${playerScore} Lost: ${pcScore}`;
        results.appendChild(para);
    } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        pcScore += 1;
        para.textContent = `You Lose! ${computerSelection} beats ${playerSelection} --- Won: ${playerScore} Lost: ${pcScore}`
        results.appendChild(para);;
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        pcScore += 1;
        para.textContent = `You Lose! ${computerSelection} beats ${playerSelection} --- Won: ${playerScore} Lost: ${pcScore}`;
        results.appendChild(para);
    } else {
        pcScore += 1;
        para.textContent = `You Lose! ${computerSelection} beats ${playerSelection} --- Won: ${playerScore} Lost: ${pcScore}`;
        results.appendChild(para);
    }


    function pageReload() {
        location.reload()
    }

    if (playerScore + pcScore === 5) {
        const newGame = document.createElement("button");

        for (let i = 0; i < 3; i++) {
            rock.removeEventListener("click", playRock);
            paper.removeEventListener("click", playPaper);
            scissors.removeEventListener("click", playScissors);
        }

        if(playerScore > pcScore) {
            para.textContent = `Congratulations! You are now a Champion!`;
            newGame.textContent = "Play again";
            newGame.addEventListener("click", pageReload)
            results.append(para, newGame);
        } else {
            para.textContent = `Nice try, but you are nothing compared to the power of INCOGNITOS, GOD OF ROCK, PAPER AND SCISSORS!!!`;
            newGame.textContent = "Wanna try again you pitiful bag of meat?";
            newGame.addEventListener("click", pageReload)
            results.append(para, newGame);
        }
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function playRock() { singleRound("Rock", getComputerChoice()); }
function playPaper() { singleRound("Paper", getComputerChoice()); }
function playScissors() { singleRound("Scissors", getComputerChoice()); }

rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);

