// Declare funtion
//  criar e armazenar valor aleatório entre 1 e 3
//  se valor = 1
//    return paper
//  se valor = 2
//    return rock
//  se valor = 3
//    return scissor
// FIM

function getComputerChoice () {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

// Declare function(playerSelection, computerSelection)
//   transform playerSelection into case-insensitive
//   if playerSelection === computerSelection {
//     return draw
//   } else if (playerSelection === rock && computerSelection === scissors) {
//     return u win
//   } else if (playerSelection === paper && computerSelection === rock) {
//     return u win
//   } else if (playerSelection === scissors && computerSelection === paper) {
//     return u win
//   } else if (playerSelection === rock && computerSelection === paper) {
//     return u lose
//   } else if (playerSelection === paper && computerSelection === scissors) {
//     return u lose
//   } else if {
//     return u win
//   }

function singleRound(playerSelection, computerSelection) {
    let strLower = playerSelection.toLowerCase();
    const firstLetter = playerSelection[0].toUpperCase();
    const selection = strLower.replace(/^[a-z]/i, firstLetter);

    if (selection === computerSelection) {
        return `Draw! You and Incognitos both chose ${selection}`;
    } else if ((selection === "Rock") && (computerSelection === "Scissors")) {
        return `You Win! ${selection} beats ${computerSelection}`;
    } else if ((selection === "Paper") && (computerSelection === "Rock")) {
        return `You Win! ${selection} beats ${computerSelection}`;
    } else if ((selection === "Scissors") && (computerSelection === "Paper")) {
        return `You Win! ${selection} beats ${computerSelection}`;
    } else if ((selection === "Rock") && (computerSelection === "Paper")) {
        return `You Lose! ${computerSelection} beats ${selection}`;
    } else if ((selection === "Paper") && (computerSelection === "Scissors")) {
        return `You Lose! ${computerSelection} beats ${selection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${selection}`;
    }
}

// declare function
//   aks how many rounds and store into a variable
//   declare 2 score variables to keep track of player and pc scores
//   if rounds === 0/NaN/Null
//     return angry message
//   for (played, enquanto <= rodadas, played + 1) {
//     call singleRound(prompt, getComputerChoice) and print the result
//     store the winner into variable score
//   }
//   if player score > pc {
//     return congrats
//   } else {
//     return loser
//   }

(function game() {
    const rodadas = +prompt("How many rounds do you wanna play?")
    let playerScore = 0;
    let pcScore = 0;

    if (rodadas === 0 || isNaN(rodadas) || rodadas === null) {
        return console.log("If you don't wanna play don't waste my time bro");
    }

    for (let rounds = 1; rounds <= rodadas; rounds++) {
        const playerSelection = prompt("Rock, paper or scissors?");
        const round = singleRound(playerSelection, getComputerChoice());
        console.log(round);

        if (round.includes("Win")) {
            playerScore += 1;
        } else if (round.includes("Lose")) {
            pcScore += 1
        }
    }

    if (playerScore > pcScore) {
        const message = `You won ${playerScore} rounds. Congratulations, you are the Champion`;
        console.log(message);
    } else if (pcScore > playerScore) {
        const message = `You lost ${pcScore} rounds. Congratulations, you are the Champion of the Losers`
        console.log(message);
    } else {
        console.log("Win or lose doesn't matter, so let's draw");
    }
})();