# Ocean Savior ... Or Not

## Description

Ocean Savior is a game happening underwater, in the ocean, where the player controls the diver character who basically has to clean the ocean. 
There are different things that come across the diver: trah items (plastic bag, can, bottle) and ocean items (fishes, turtles).
The diver had to catch the trash items to score points. On the other side, if she touches fishes or turtle, she will lose double the points.
(In addition, on the bottom of the ocean, there are corals, those are very fragile and if the diver touches them the game will end.)

The score will be calculated based on the number of trash items caught, minus the ocean elements touched.
A trash item bring 1 point while the ocean elements deduct 2 points.
(If a coral is touched, it'll immediately end the game.)

## MVP (DOM - CANVAS)

- The game has one diver character (female) on the left of the creen. She can move vertically.
- Sea and trash elements appear randomly from the right of the screen and move to the left on an horizontal axis.
(- coral elements randomly appear on the bottom of the screen from the right to the left and have different height. If the diver touches one, the game end.)
- Scoreboard appear on the top center of the game screen

## Backlog

- Adding deadly corals on the bottom
- Increasing dificulty (every 10 points speed x 1.5)
- Adding visual effects:    
    - Buble going up everytime the gamer earns or loses points
    - Adding a wave effect on the canvas
- Adding audio effects
    - Sound when picking trash
    - Sound when touching a fish
    - Background sound
    - Sound for start of the game
    - Sound for game over

## Data Structure

# main

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addElements () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# diver.js 

- Diver () {
    this.x;
    this.y;
}
- draw () {}
- move () {}
- collision () {}

# elements.js 

- Elements () {
    this.name;
    this.type;
    this.x;
    this.y;
    this.points;
    this.speed; 
}
- draw () {}
- move () {}
- collision () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
Start button

- gameScreen
Canvas in the middle of the screen

- gameOverScreen
Pop up for game over and add button to replay



## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- sea elements - draw
- sea elements - move
- game - sea elements
- diver - draw
- diver - move
- game - addShip
- game - checkCollision
- game - GameOver
- game - addEventListener
- scoreboard - draw


## Links

### Trello
[Link url](https://trello.com/b/RfYpb47s/ironhack-project-1-ocean-savior)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/maevamerrou/ironhacklab1game/tree/master)
[Link Deploy]()

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/....)