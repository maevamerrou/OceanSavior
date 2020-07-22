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
let gameTimeCount = 0;



// --------- SCORE ---------


function scoreDisplay(){
    context.fillStyle = "#E97D7D"
    context.fillRect(canvas.width/2-220/2, 0,220,30); // Score frame
    context.fillStyle = "black"; 
    context.font = '15px Verdana black'
    context.fillText(`Score: ${score} Time: ${gameTimeCount} sec`,450,20)   // Score text (add later ${scoreVariable})
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
                    if (diverY > 40){
                          diverY-= 15;
                        };
                        break;
                    case 40:
                        if (diverY + diverImg.height < canvas.height - 10){
                            diverY+= 15;
                        };
                        break;
                    case 37:
                        if (diverX > 10){
                            diverX-= 15;
                        };
                        break;
                    case 39:
                        if (diverX + diverImg.width < canvas.width - 10){
                            diverX+= 15;
                        };
                        break;
                }                
});
   



// --------- OTHER FUNCTIONS ---------


// pick random bottom element
let randomBottomEl = bottomEl[Math.floor(Math.random()*bottomEl.length)];


// pick a random top element
let randomTopEl = topEl[Math.round(Math.random()*topEl.length)];


// pick a random line from the top
let randomTopLine = topLines[Math.round(Math.random()*topLines.length)];


// function to clear the canvas to generate animation (no shadowing of each element)
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
};


// --------- CREATE NEW ELEMENTS FUNCTIONS ---------



let speed = 1


// Passage for elements on the top (5 rows)

let topItems = [{img: topEl[Math.floor(Math.random()*topEl.length)], x: canvas.width- 20 , y: topLines[Math.floor(Math.random()*topLines.length)].y}]

function topLinesPassage(){
    for (let i=0; i< topItems.length; i++){
        context.drawImage(topItems[i].img, topItems[i].x, topItems[i].y);
        topItems[i].x -= speed

        if (topItems[i].x == (canvas.width - (diverImg.width-30))){
            topItems.push({
                img: topEl[Math.floor(Math.random()*topEl.length)],
                x: canvas.width -20,
                y: topLines[Math.floor(Math.random()*topLines.length)].y
            })
        }
    }
}



// Passage for elements on the bottom

let bottomLine = [{img: bottomEl[Math.floor(Math.random()*bottomEl.length)], x: canvas.width- 20 , y: canvas.height - 100}]

function bottomLinePassage(){
    for (let i=0; i < bottomLine.length; i++){
        context.drawImage(bottomLine[i].img, bottomLine[i].x, bottomLine[i].y);
        bottomLine[i].x -= speed

        if (bottomLine[i].x == (canvas.width - (diverImg.width+60))){
            bottomLine.push({
                img: bottomEl[Math.floor(Math.random()*bottomEl.length)],
                x: canvas.width -20,
                y: canvas.height - 100
            })
        }
    }

}



// function increase game speed

function increaseGameSpeed(){
    bottomLine.forEach(function(element){
        if (gameTimeCount > 30){
            // speed = 2;
            console.log("30sec")
        } else if (gameTimeCount > 20){
            // speed = 1.7;
            console.log("20sec")
        } else if (gameTimeCount > 10){
            // speed = 1.5;
            console.log("10sec")

        }

    }
    )

    topItems.forEach(function(element){
        if (gameTimeCount > 30){
            // speed = 2;
            console.log("30sec")
        } else if (gameTimeCount > 20){
            // speed = 1.7;
            console.log("20sec")
        } else if (gameTimeCount > 10){
            // speed = 1.5;
            console.log("10sec")

        }

    }
    )

};


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




// --------- TIME, SPEED FUNCTIONS ---------


// function to set up time

function increaseTime(){
    setInterval(() => {
        gameTimeCount += 1 ;
    }, 1000);
    
};


// --------- FUNCTIONS ---------


function gameOver(){
    canvas.remove();
    clearInterval(intervalId);
    location.href = "game-over.html";
};



function draw(){
    context.drawImage(bgImg, 0, 0);
    scoreDisplay();
    increaseGameSpeed();
    topLinesPassage();
    bottomLinePassage();
    context.drawImage(diverImg, diverX, diverY);
    if (score < 0){
        gameOver()
    };
    collisionDetectionTopEl();
    collisionDetectionBottomEl();
};


// this function set an interval which reset every refresh of the page
// we first clear the screen and then loop the draw function


newSound(splashSound, 0.3, false)
increaseTime()

intervalId = setInterval(() => {
    clearCanvas()  
    newSound(bgSound, 0.5, true)
    requestAnimationFrame(draw) // loop the draw function
}, 20);


