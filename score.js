// Iteration 5: Store the player score and display it on the game over screen


let score =localStorage.getItem("score");

var scoreBoard =document.getElementById("score-board");

var playAgainButton= document.getElementById("play-again");

scoreBoard.innerHTML=score;



const play = document.getElementById("play-again-button");

play.onclick = () =>{
    location.href="./game.html";
}