let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choise");
const msg=document.querySelector("#msg")
const userScorepara=document.querySelector("#User-Score")
const compScorepara=document.querySelector("#comp-score")

const genCompChoice =()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3)
    return option[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game draw !"
    msg.style.backgroundColor="#081b31"
}
const showWinner=(userWin)=>{
    if(userWin===true){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        msg.innerText="you win !"
        msg.style.backgroundColor="green"
    } else {
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you lose");
        msg.innerText="you lose !"
        msg.style.backgroundColor="red"
    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice was clicked=",compChoice);
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };
  



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id"); 
        console.log(" user choice was clicked=",userChoice);
        playGame(userChoice);
    });
});

