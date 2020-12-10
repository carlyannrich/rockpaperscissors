// establishes computer random choice

let playerTotal = 0;
let compTotal = 0;
const buttons = document.querySelectorAll(".btn");

const playerSelection = document.querySelector("#playerTotal");
player.textContent = `your score: ${playerTotal}`;

const computerSelection = document.querySelector("#compTotal");
computer.textContent = `computer score: ${compTotal}`;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerTotal > compTotal) {
      output.textContent = "It is undeniable. You are the champion.";
    } else if (playerTotal === compTotal) {
      output.textContent = "You drew, fair play.";
    } else if (playerTotal < compTotal) {
      output.textContent = "Sorry, but you are a loser of THE GAME.";
    }
  });
});

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

function singleRound() {
  // assigns computer and player selection
  const playerSelection = button.id;
  player.textContent = `your score: ${playerTotal}`;
  const computerSelection = computerPlay();
  computer.textContent = `computer score: ${compTotal}`;

  // switch (playerSelection + computerSelection) {
  //   case "rockscissors":
  //   case "paperrock":
  //   case "scissorspaper":
  //     return "Hooray! You Win!";
  //   case "rockpaper":
  //   case "paperscissors":
  //   case "scissorsrock":
  //     return "Oh dear... You Lose!";
  //   case "rockrock":
  //   case "paperpaper":
  //   case "scissorsscissors":
  //     return "It's a Draw!";
  // }

  if (outcome.win.includes(playerSelection + computerSelection)) {
    playerTotal += 1;
    return "Hooray! You Win!";
  } else if (outcome.lose.includes(playerSelection + computerSelection)) {
    compTotal += 1;
    return "Oh dear... You Lose!";
  } else if (outcome.draw.includes(playerSelection + computerSelection)) {
    return "It's a Draw!";
  } else {
    return "Uhoh error...";
  }
}

function game() {
  player.textContent = `your score: ${playerTotal}`;
  computer.textContent = `computer score: ${compTotal}`;
  let i = 1;
  while (i <= 5) {
    console.log(singleRound());
    i++;
  }
}

game();
