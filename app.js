// Caching DOM variables

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// Event Listeners

function main() {

    rock_div.addEventListener('click', function() {
        game('r');
})

    paper_div.addEventListener('click', function() {
        game('p');
})

    scissors_div.addEventListener('click', function() {
        game('s');
})

}
main();

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function convertToWord(letter) {
    const look = {r: "Rock", p: 'Paper', s: 'Scissors'}
    return look[letter]
}

function win(userChoice, computerChoice) {
    userScore += 1;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} covers ${convertToWord(computerChoice)}${smallComputerWord}. You win!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300)
}


function lose(userChoice, computerChoice) {
    computerScore += 1
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallComputerWord} covers ${convertToWord(userChoice)}${smallUserWord}. You lose!`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw!`
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 300)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

