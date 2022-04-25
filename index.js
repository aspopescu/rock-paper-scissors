let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let gameText = document.querySelector("#gameText");
let choiceButtons = document.querySelectorAll(".choiceButton");
let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    gameText.textContent = `Result: ${checkWinner()}`;
}));

function computerTurn(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
};

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if (computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lost!";
    }
    else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lost!";
    }
    else if (computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lost!";
    }
};