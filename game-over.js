
// GAME OVER PAGE JAVASCRIPT FILE

let endSound = new Audio("sound/gameOver.wav");

function newSound(sound, level, looping){
    sound.volume = level;
    sound.play();
    sound.loop = looping;
}

document.getElementById("score-text").innerHTML = `Your score is ${window.localStorage.getItem('Score')}.`



// function totalScore(){
//     document.getElementById("game-over-text").innerText = "Ouch you lost!! Your score is " + score + "."
// }

// totalScore()
newSound(endSound, 1, false)
//add event listener for the click btn sound to add also on the home page