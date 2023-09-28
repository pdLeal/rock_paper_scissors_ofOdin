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