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
    playerText.textContent = `Spop: ${player}`;
    computerText.textContent = `Gaspar: ${computer}`;
    gameText.textContent = `Winner: ${checkWinner()}`;
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
        return (player == "PAPER") ? "Sorin!" : "Decoy Mapucci!";
    }
    else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "Sorin!" : "Decoy Mapucci!";
    }
    else if (computer == "SCISSORS"){
        return (player == "ROCK") ? "Sorin!" : "Decoy Mapucci!";
    }
};