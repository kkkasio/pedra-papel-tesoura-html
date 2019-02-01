let userScore = 0;
let computerScore = 0;
const userScore_span =  document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div =  document.getElementById("p");
const scissors_div =  document.getElementById("s");

function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter){
  if (letter == 'r') return "Pedra";
  if (letter == 'p') return "Papel"
  return "Tesoura";

}
function win(userChoice,computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML  = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ganha ${convertToWord(computerChoice)}${smallCompWord} Você ganhou! 🔥🔥`;
  userChoice_div.classList.add('green-glow');
  document.getElementById('user-label').classList.add('animated','flash')

  setTimeout(function () {
    userChoice_div.classList.remove('green-glow');
    document.getElementById('user-label').classList.remove('animated','flash');
  },1500);

}

function lose(userChoice,computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  computerScore++;
  userScore_span.innerHTML  = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde para ${convertToWord(computerChoice)}${smallCompWord} Você Perdeu! 💩💩`;
  userChoice_div.classList.add('red-glow');
  document.getElementById('computer-label').classList.add('animated','flash');

  setTimeout(function () {
    userChoice_div.classList.remove('red-glow');
    document.getElementById('computer-label').classList.remove('animated','flash');
  },1500);

}

function draw(userChoice,computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} empata com ${convertToWord(computerChoice)}${smallCompWord} Empatou! 🤷‍♂️🤷‍♀️‍`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1000)
}
function game(userChoice){
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice,computerChoice);
    break;

    case "sr":
    case "rp":
    case "ps":
    lose(userChoice,computerChoice);
    break;

    case "rr":
    case "pp":
    case "ss":
    draw(userChoice,computerChoice );
    break;
    default:

  }

}
function main(){
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
