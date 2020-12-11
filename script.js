// establishes computer random choice
let amountOfGame = 0;
let playerTotal = 0;
let compTotal = 0;

const buttons = document.querySelectorAll(".btn");

const setGameTotals = (id, player, total) => {
  const element = document.getElementById(id);
  element.innerHTML = `${player} score: ${total}`;
};

// plays one round of the game - works out who won

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

const outcome = {
  win: ["rockscissors", "paperrock", "scissorspaper"],
  lose: ["rockpaper", "paperscissors", "scissorsrock"],
  draw: ["rockrock", "paperpaper", "scissorsscissors"],
};

function singleRound(playersChoice) {
  const computerSelection = computerPlay();

  if (outcome.win.includes(playersChoice + computerSelection)) {
    playerTotal++;
    return "Hooray! You Win!";
  } else if (outcome.lose.includes(playersChoice + computerSelection)) {
    compTotal++;
    return "Oh dear... You Lose!";
  } else if (outcome.draw.includes(playersChoice + computerSelection)) {
    return "It's a Draw!";
  } else {
    return "Uhoh error...";
  }
}

function totalScore() {
  if (playerTotal > compTotal) {
    return "It is undeniable. You are the champion.";
  } else if (playerTotal === compTotal) {
    return "You drew, fair play.";
  } else if (playerTotal < compTotal) {
    return "Sorry, but you are a loser of THE GAME.";
  }
}

function game(playersChoice) {
  if (amountOfGame === 0)
    document.getElementById("output").innerHTML = "good luck...";
  if (amountOfGame < 4) {
    singleRound(playersChoice);
    setGameTotals("playerTotal", "player", playerTotal);
    setGameTotals("compTotal", "computer", compTotal);
    amountOfGame++;
  } else {
    // game over func
    // highlight winner
    // reset amount of games
    document.getElementById("output").innerHTML = totalScore();
    amountOfGame = 0;
    playerTotal = 0;
    compTotal = 0;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playersChoice = event.target.id;
    game(playersChoice);
  });
});
