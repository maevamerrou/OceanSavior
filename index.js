

let indexSound = new Audio("sound/indexSound.wav");


function newSound(sound, level, looping){
    sound.volume = level;
    sound.play();
    sound.loop = looping;
}


newSound(indexSound, 1, true)