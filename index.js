
let indexSound = new Audio("sound/indexSound.wav");
let clickSound = new Audio("sound/btnSound.mp3");


function newSound(sound, level, looping){
    sound.volume = level;
    sound.play();
    sound.loop = looping;
}



// let playBtn = document.getElementById("play-btn");


// playBtn.addEventListener("click", function(){
//     newSound(clickSound, 1, false);
//     // location.href = "game.html";

// })


let soundOff = document.getElementById("soundOFFLogo");
let soundOn = document.getElementById("soundONLogo");


soundOff.addEventListener("click", function(){
    indexSound.pause();
    }
)


soundOn.addEventListener("click", function(){
    newSound(indexSound, 0.8, true)
    }
)



newSound(indexSound, 0.8, true)
