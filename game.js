// GAME PAGE JAVASCRIPT FILE



// NOTES
// save canvas: save()
// restore canvas: restore()
// clear canvas: clearRect()
//requestAnimationFrame() call this method when need to update animation onscreen


let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

canvas.width = 1100;
canvas.height = 610;

canvas.style.border = '4px solid #E97D7D';

let intervalId = 0;
var score = 0;
let gameTime = 0;



// --------- SCORE ---------

lengthScoreRec = 350

function scoreDisplay(){
    context.fillStyle = "#E97D7D"
    context.fillRect(canvas.width /2 - lengthScoreRec/2, 0,lengthScoreRec,30); // Score frame
    context.fillStyle = "black"; 
    context.font = '13px Verdana black'
    context.textAlign = "center";
    context.fillText(`Score: ${score} - Time: ${gameTime} - Level: ${gameLevel}`,canvas.width /2,20)   // Score text (add later ${scoreVariable})
}



// --------- SOUND ---------


let bgSound = new Audio("sound/bgSound.mp3");
let splashSound = new Audio("sound/splashSound.mp3");
let point = new Audio("sound/point.mp3");
let pointExtra = new Audio("sound/pointExtra.mp3");
let pointLoss = new Audio("sound/pointLoss.mp3");


function newSound(sound, level, looping){
    sound.volume = level;
    sound.play();
    sound.loop = looping;
}


// function soundOff(){
//     bgSound.pause();
// };



// --------- IMAGES ---------


let bgImg = new Image();
bgImg.src = 'img/bg.jpg';

let diverImg = new Image();
diverImg.src = "img/diver.png";

let fish1 = new Image();
fish1.src = 'img/fish1.png';

let fish2 = new Image();
fish2.src = 'img/fish2.png';

let jellyfish = new Image();
jellyfish.src = 'img/jellyfish.png';

let bag = new Image();
bag.src = 'img/bag.png';

let bottle = new Image();
bottle.src = 'img/bottle.png';

let can = new Image();
can.src = 'img/can.png';

let packaging = new Image();
packaging.src = 'img/packaging.png';

let wheel = new Image();
wheel.src = 'img/wheel.png';

let coral1 = new Image();
coral1.src = 'img/coral-small.png';

let coral2 = new Image();
coral2.src = 'img/coral-big.png';

let coral3 = new Image();
coral3.src = 'img/coral3.png';

let blankBottomEl = new Image();
blankBottomEl.src = 'img/blankBottomEl.png';

let blankTopEl = new Image();
blankTopEl.src = 'img/blankTopEl.png';

let bubbleScore = new Image();
bubbleScore.src = 'img/bubbleScore.png';


// --------- ELEMENTS, GAME LINES VARIABLES ---------

let diverY = 150;
let diverX = 10;

let topMargin = 50;
let lineHeight = 90;

let seaEl = [fish1, fish2, jellyfish];
let trashEl = [bag, bottle, can, packaging, bag, bottle];
let bottomTrash = [wheel]; 
let bottomSea = [coral1, coral2, coral3]
let bottomEl = [wheel, coral1, coral1, coral1, coral2, coral2, coral3, coral3, coral3];
let topEl = [fish1, fish2, jellyfish, bag, bottle, can, packaging]; // all items in the middle of the screen
let blankEl = [blankBottomEl, blankTopEl];

let gameLevels = ["Beginner", "Skilled", "Master", "Professional", "Elite"]



let topLines = [
    {y: topMargin + 0},
    {y: topMargin + 1 * lineHeight},
    {y: topMargin + 2 * lineHeight},
    {y: topMargin + 3 * lineHeight},
    {y: topMargin + 4 * lineHeight},
];



// --------- EVENT LISTENER MOUSE GAME ---------


document.addEventListener('keydown', e => {
                switch (e.keyCode) {
                    case 38: 
                    if (diverY > 20){
                          diverY-= 20;
                        };
                        break;
                    case 40:
                        if (diverY + diverImg.height < canvas.height - 20){
                            diverY+= 20;
                        };
                        break;
                    case 37:
                        if (diverX > 20){
                            diverX-= 20;
                        };
                        break;
                    case 39:
                        if (diverX + diverImg.width < canvas.width - 20){
                            diverX+= 20;
                        };
                        break;
                }                
});
   



// --------- FUNCTIONS TO RANDOMIZE ITEM ---------


// pick random bottom element
let randomBottomEl = bottomEl[Math.floor(Math.random()*bottomEl.length)];


// pick a random top element
let randomTopEl = topEl[Math.round(Math.random()*topEl.length)];


// pick a random line from the top
let randomTopLine = topLines[Math.round(Math.random()*topLines.length)];




// --------- THROW ELEMENTS ON CANVAS FUNCTIONS ---------

let gameSpeed = 1


// Random passage for elements on the top (5 rows)

let topItems = [{img: topEl[Math.floor(Math.random()*topEl.length)], x: canvas.width- 20 , y: topLines[Math.floor(Math.random()*topLines.length)].y}]

function topLinesPassage(){
    for (let i=0; i< topItems.length; i++){
        context.drawImage(topItems[i].img, topItems[i].x, topItems[i].y);
        topItems[i].x -= gameSpeed
        if (topItems[i].x == (canvas.width - (diverImg.width-30))){
            topItems.push({
                img: topEl[Math.floor(Math.random()*topEl.length)],
                x: canvas.width -20,
                y: topLines[Math.floor(Math.random()*topLines.length)].y
            })
        }
    }
}



// Random passage for elements on the bottom

let bottomLine = [{img: bottomEl[Math.floor(Math.random()*bottomEl.length)], x: canvas.width- 20 , y: canvas.height - 100}]

function bottomLinePassage(){
    for (let i=0; i < bottomLine.length; i++){
        context.drawImage(bottomLine[i].img, bottomLine[i].x, bottomLine[i].y);
        bottomLine[i].x -= gameSpeed
        if (bottomLine[i].x == (canvas.width - (diverImg.width + 90))){
            bottomLine.push({
                img: bottomEl[Math.floor(Math.random()*bottomEl.length)],
                x: canvas.width -20,
                y: canvas.height - 100
            })
        }
    }
}



// function increase game speed

let gameLevel = gameLevels[0]


function increaseGameSpeed(){
        if (gameTime > 40){
            gameSpeed = 2.5;
            gameLevel = gameLevels[4]
            console.log("120sec")
        } else if (gameTime > 30){
            gameSpeed = 2;
            gameLevel = gameLevels[3]
            console.log("90sec")
        } else if (gameTime > 20){
            gameSpeed = 1.8;
            gameLevel = gameLevels[2]
            console.log("60sec")
        } else if (gameTime > 10){
            gameSpeed = 1.5;
            gameLevel = gameLevels[1]
            console.log("30sec")
        }
}
    
    // topItems.forEach(function(element){
    //     if (gameTime > 120){
    //         // gameSpeed = 2.5;
    //         // gameLevel = gameLevels[4]
    //         console.log("120sec")
    //     } else if (gameTime > 90){
    //         // gameSpeed = 2;
    //         // gameLevel = gameLevels[3]
    //         console.log("90sec")
    //     } else if (gameTime > 60){
    //         // gameSpeed = 1.8;
    //         // gameLevel = gameLevels[2]
    //         console.log("60sec")
    //     } else if (gameTime > 30){
    //         // gameSpeed = 1.5;
    //         // gameLevel = gameLevels[1]
    //         console.log("30sec")
    //     }
    // }
    // )




// --------- COLLISION DETECTION FUNCTIONS ---------


function collissionElements(element) {
    // variables for easier reading
    var diverLeft = diverX
    var diverRight = diverX + diverImg.width
    var diverTop = diverY
    var diverBottom = diverY + diverImg.height
    
    // variables for easier reading
    var elementLeft = element.x;
    var elementRight = element.x + element.img.width;
    var elementTop = element.y;
    var elementBottom = element.y + element.img.height;
    
    // checks in variables for easier reading
    var crossRight = elementLeft <= diverRight && elementRight >= diverLeft;
    var crossLeft = elementRight >= diverLeft && elementLeft <= diverRight;
    var crossTop = elementBottom >= diverTop && elementTop <= diverBottom;
    var crossBottom = elementBottom <= diverBottom && elementBottom >= diverTop;

    // collision check
    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    }
    return false;
  }



  // collision detection top line

function collisionDetectionTopEl(){

    topItems.forEach(function(element){
        if (collissionElements(element)){
            if (blankEl.includes(element.img) === true){

            } else if (seaEl.includes(element.img) === true) {
                element.img = blankEl[1]
                score -= 10
                newSound(pointLoss, 0.7, false)

            } else {
                // bottomLine.splice(element, 1);
                element.img = blankEl[1]
                score += 5
                newSound(point, 1, false) 
            }
        }
    }
    )   
}


// collision detection bottom line

function collisionDetectionBottomEl(){

        bottomLine.forEach(function(element){
            if (collissionElements(element)){
                if (blankEl.includes(element.img) === true){

                } else if (bottomSea.includes(element.img) === true) {
                    element.img = blankEl[0]
                    gameOver()

                } else {
                    // bottomLine.splice(element, 1);
                    element.img = blankEl[0]
                    score += 30
                    newSound(pointExtra, 1, false)
                }
            }
        }
        )   
}




// --------- GAME FUNCTIONS ---------


// function to count seconds and increase the gameTime variable

function increaseTime(){
    setInterval(() => {
        gameTime += 1 ;
    }, 1000);
    
};



// //TO FINISH

// function bubbleScoreUp (){
//     let bubbleY = 100
//     context.drawImage(bubbleScore, 50, bubbleY)
//     bubbleY-=1;
// }




// function to clear the canvas to generate animation (no shadowing of each element)
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
};



//Function to end game and reser interval ID
function gameOver(){
    canvas.remove();
    clearInterval(intervalId);
    location.href = "game-over.html";
};



function draw(){
    newSound(bgSound, 0.4, true)
    context.drawImage(bgImg, 0, 0);
    context.drawImage(diverImg, diverX, diverY);
    scoreDisplay();
    topLinesPassage();
    bottomLinePassage();
    if (score < 0){
        gameOver()
    };
    collisionDetectionTopEl();
    collisionDetectionBottomEl();
};





// --------- FINAL SET INTERVAL FUNCTION ---------

// this function set an interval which reset every refresh of the page
// we first clear the screen and then loop the draw function


newSound(splashSound, 0.4, false)
increaseTime()

intervalId = setInterval(() => {
    clearCanvas()  
    requestAnimationFrame(draw) // loop the draw function
}, 10);


