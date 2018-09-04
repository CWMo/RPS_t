
function playRound() {
	// your code here!
  function getComputerPlay() {
    let choice=Math.trunc(Math.random()*3);
    switch (choice) {
      case 0: return "ROCK";
      case 1: return "PAPER";
      otherwise: return "SCISSOR";
    }
  }

  function getPlayerSelection() {
    let choice;
    do {
      choice = prompt("Please input your choice (ROCK, PAPER or SCISSOR)").toUpperCase();
      if ("ROCK,PAPER,SCISSOR".indexOf(choice) >= 0) break;

      console.log("Invalid choice:"+choice);
    } while (true);
    return choice;
  }

  let computerSelection = getComputerPlay();
  let playerSelection = getPlayerSelection();

  if (computerSelection == playerSelection) {
    return "This round is a draw";
  } else if (computerSelection == "ROCK") {
    if (playerSelection == "SCISSOR") {
      return "You Lose! Rock beats Scissor";
    }
    else {
      return "You Win! Paper beats Rock";
    }
  }
  else if (computerSelection == "PAPER") {
    if (playerSelection == "ROCK") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Scissor beats Paper";
    }
  }
  else { //computerSelection is SCISSOR
    if (playerSelection == "PAPER") {
      return "You Lose! Scissor beats Paper";
    } else {
      return "You Win! Rock beats Scissor";
    }
  }
}

function game(numOfRound=1){
  let userScore = 0, computerScore = 0;
  let result;
  for (i=0;i<numOfRound;i++){
    console.log("Round "+(i+1)+" "+(result=playRound()));
    if (result.indexOf("Win") > 0) {
      userScore++;
    } else if (result.indexOf("Lose") > 0) {
      computerScore++;
    }
  }
  if (userScore > computerScore) {
    console.log("Congratulations, you are the winner!!!");
  } else if (userScore < computerScore) {
    console.log("Sorry, you are the loser.");
  } else {
    console.log("Oh, the game is a draw.");
  }
}
