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