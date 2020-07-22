
// GAME OVER PAGE JAVASCRIPT FILE

let endSound = new Audio("sound/gameOver.mp3");
let btnSound = new Audio("sound/btnSound.mp3");


function gameOverSound(){
    endSound.volume = 1;
    endSound.play();
    endSound.loop = false;
};



function clickSound(){
    btnSound.volume = 0.7;
    btnSound.play();
    btnSound.loop = false;
};



function totalScore(){
    document.getElementById("game-over-text").innerText = "Ouch you lost!! Your score is " + score + "."
}

totalScore()
gameOverSound()

//add event listener for the click btn sound to add also on the home page