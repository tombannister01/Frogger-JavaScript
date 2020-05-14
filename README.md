# Project-1

<h1>Frogger</h1>


<h2>Overview </h2>

I am currently a student at General Assembly software engineering immersive (SEI). This project is my first with GA and was to be completed individually, I was given a maximum of 1 week to produce my MVP.

I chose frogger because I thought it would be challenging for me and i wanted to 'push the envelope' in terms of my capability. The aim of the game is to maneuver the frog to the grass on the otherside of the grid whilst avoiding spikes, cars and moving water.

<h2>Technologies used</h2>
- HTML5
- CSS3
- JavaScript ES6


<h3>How I designed the grid</h3>


<div class="grid"></div>

- I started of by creating a div element and assigned it the class 'grid' (this will be useful later on)

```js
let frog = 280
const cells = []

function loadGrid() {
  const grid = document.querySelector('.grid')

  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    if (i === frog) {
      cell.classList.add('frog')
    }
    cell.id = i

    grid.appendChild(cell)
    cells.push(cell)
  }
}
```

- I used a for loop to create each cell in the grid and pushed each cell onto my cells array. 

- Next, I set my value of my frog to be 280 which is the ID of the cell I wanted my frog to start at.

- Defining how big I want my grid

``` js 
const widthOfGrid = 17
const gridCellCount = widthOfGrid * widthOfGrid
```
- Finally, I called this function inside my page load function.

```window.addEventListener('DOMContentLoaded', main)```



## Frog movement 
- I created 4 classes of frog in CSS and added a transform property to allow the frog to turn when certain arrow keys are pressed.


```
 .frog {
 background-image: url('https://cdn.clipart.email/ccf5822a3b7b840f389950e9dee7f656_the-tree-frog-clip-art-frog-clipart-png-download-13921415-_1392-1415.png');
 background-size: contain;
}

.frog-left {
  background-image: url('https://cdn.clipart.email/ccf5822a3b7b840f389950e9dee7f656_the-tree-frog-clip-art-frog-clipart-png-download-13921415-_1392-1415.png');
 background-size: contain;
 transform: rotate(-90deg);
 }

 .frog-right {
  background-image: url('https://cdn.clipart.email/ccf5822a3b7b840f389950e9dee7f656_the-tree-frog-clip-art-frog-clipart-png-download-13921415-_1392-1415.png');
  background-size: contain;
  transform: rotate(90deg);
 }

 .frog-down {
  background-image: url('https://cdn.clipart.email/ccf5822a3b7b840f389950e9dee7f656_the-tree-frog-clip-art-frog-clipart-png-download-13921415-_1392-1415.png');
  background-size: contain;
  transform: rotate(180deg);
 }
```
## Movement in js

``` js 
function movementOfFrog() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (frog === cells.length - 1) {
        return
      }
      frogDirection = 'right'
      frog += 1

    } else if (event.key === 'ArrowLeft') {
      if (frog === 0) {
        return
      }
      frogDirection = 'left'
      frog -= 1
      
    } else if (event.key === 'ArrowUp') {
      if (frog < widthOfGrid) {
        return
      }
      frogDirection = 'frog'
      frog -= widthOfGrid

    } else if (event.key === 'ArrowDown') {
      if (frog > cells.length - widthOfGrid - 1) {
        return
      }
      frogDirection = 'down'
      frog += widthOfGrid
      
    }
    renderGame()
    FrogFinish()
    frogDie()
    frogDieOnSpike()
    frogAndRock()
    frogDieInWater()
    froggerHop.play()
  })
}
```
- The movement of frog function allows the value of frog to change when different arrow keys are pressed.

- This function also calls every die function for the frog and a .wav sound for each hop.

- The return statement does not allow the frog to exit the grid. (wrap)


## Render game function
``` js 
function renderGame() {
  cells.forEach(cell => {
    cell.classList.remove('frog')
    cell.classList.remove('frog-right')
    cell.classList.remove('frog-left')
    cell.classList.remove('frog-down')
  })
  switch (frogDirection) {
    case 'left': cells[frog].classList.add('frog-left'); break
    case 'right': cells[frog].classList.add('frog-right'); break
    case 'down': cells[frog].classList.add('frog-down'); break
    default: cells[frog].classList.add('frog'); break
  }
  
}
```
- This render game function allows the frog to be drawn and removed when the value of frog changes throughout the game.

- This also uses a switch statement to allow each direction of the frog to be rendered correctly when the direction of the frog is specified.

- The render function was not my original plan. I started off drawing and erasing each position of the frog within the movement function but this made my code look a bit messy and repeated.

## Loading / rendering the grid items
``` js
function loadRiver() {

  for (let i = 17; i < 85; i++) {
    cells[i].classList.add('river')
  }

}
```
- to add each classlist to the cells I used a for loop and selected the cells I wanted. 

``` js 
const carsArray = [240, 245, 248, 250, 254, 255, 257, 259, 263, 265, 269, 238, 234, 233, 230, 227, 226, 224, 220, 218, 215, 213, 210, 206, 203, 200, 199, 196, 194, 190, 188, 186, 184, 180, 176, 175, 173, 170]
```
``` js 
function loadCars() {
  for (let i = 0; i < 273; i++) {
    if (carsArray.includes(i)) {
      cells[i].classList.add('car')
    }
  }
}
```

- For the car positions I used an array to specify the positions I wanted my cars at. I used the same method when loading and rendering my logs.


-
## Biggest wins

- The biggest win for me on this project was that it only took me a short amount of time to workout the logic for the grid to be displayed. This became useful in the long run as it saved some time for other areas.


## Challenges

- The biggest challange for me was getting the frog to stay on the log and getting them to move on the same squares without falling off into the river. This took a few days but managed to solve it using a boolean.


## Lessons Learned 

- From the project i learnt how to manage my time properly as it was my first project I had no experience with project deadlines. This skill will prove useful for future projects.