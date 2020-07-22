# Ocean Savior

## Description

Ocean Savior is a game taking place underwater, in the ocean, where the player controls the diver character who basically has to clean the ocean. 
There are different types of things that come across the diver: trah items (plastic bag, can, bottle) and ocean items (fishes, jellyfish, coral).
The diver had to catch the trash items to score point but avoid touching the sea elements.


## MVP (DOM - CANVAS)

- The game has one diver character (female) on the left of the creen. She can move horizontally and vertically.
- Sea and trash elements appear randomly from the right of the screen and move to the left on an horizontal axis.
- Score, level and time are indicated at the top of the game window

## Backlog

- Adding deadly corals on the bottom
- Increasing dificulty 
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