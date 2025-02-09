let userScore = 0;
let compScore = 0;
// accessing the "choice" and "msg"
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// accessing the "user-score" and "comp-score" 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
// generating the computer choice randomly
const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
// for draw the game
const drawGame = () => {
    //console.log("Game was draw");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "blue";
};
//  show the winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {               //for user win condition
        //console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {                   // for computer win condition
        //console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};
// playing the game
const playGame = (userChoice) => {
    //console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genComChoice();
    //console.log("computer choice = ", compChoice);
    // checking the game condition
    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, papaer
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else { // userChoice === "scissors"
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
//  
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});