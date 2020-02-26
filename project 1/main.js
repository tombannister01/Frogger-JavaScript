
function main() {
  const grid = document.querySelector('.grid')
  const logo = document.querySelector('.logo')
  const livesCounter = document.querySelector('.lives-counter')
  const startButton = document.querySelector('.start-button')
  const gameOver = document.querySelector('.game-over')
  const resetButton = document.querySelector('.reset-button')
  const finish = document.querySelector('.finish')
  startButton.addEventListener('click', GameStart)
  // resetButton.addEventListener('click', GameStart)



  function GameStart() {
    // call functions here to display front page 
    startButton.classList.remove('start-button')
    startButton.style.display = 'none'
    grid.classList.add('grid')
    logo.style.display = 'none'
    livesCounter.innerHTML = 'lives: 3'
    resetButton.style.display = 'none'
    gameOver.style.display = 'none'
    finish.style.display = 'none'
    loadGrid()
    movementOfFrog()
    loadRiver()
    loadRoad()
    loadCars()
    loadLogs()
    loadLogsDark()
    loadGrass()
    // loadLilypad()
    loadSpikes()
    loadRock()
    moveCar()
    moveLog()
    moveLog2()
    // frogDieOnSpike()
    // frogAndRock()
    // frogMoveWithLog()
    // frogDie()
    // moveCar1()
    // moveCar2()
    // moveCar3()
    // frogAndLog()
    // FrogFinish()
  }



  grid.classList.remove('grid')
  livesCounter.innerHTML = ''
  resetButton.style.display = 'none'
  gameOver.style.display = 'none'
  finish.style.display = 'none'
}




window.addEventListener('DOMContentLoaded', main)

// let river = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]




let lives = 3
let frog = 280
const cells = []
const carsArray = [240, 245, 248, 250, 254, 255, 257, 259, 263, 265, 269, 238, 234, 233, 230, 227, 226, 224, 220, 218, 215, 213, 210, 206, 203, 200, 199, 196, 194, 190, 188, 186, 184, 180, 176, 175, 173, 170]
const leftWall = [255, 238, 221, 204, 187, 170]
const widthOfGrid = 17
const gridCellCount = widthOfGrid * widthOfGrid
const logArray = [69, 70, 74, 75, 79, 80, 36, 37, 42, 43, 48, 49]
const logArrayDark = [51, 52, 56, 57, 61, 62, 16, 17, 21, 22, 26, 27]
const rightWall = [33, 50, 67, 84]
let movedFrog = false


function loadRiver() {

  // const grid = document.querySelector('.grid')
  // console.log(grid)
  // for (let i = 16; i < 83; i++) {
  //   grid[i].classList.add('river')

  for (let i = 17; i < 85; i++) {
    cells[i].classList.add('river')
  }

}

function loadRoad() {
  for (let i = 170; i < 272; i++) {
    cells[i].classList.add('road')
  }

}

function loadCars() {
  for (let i = 0; i < 273; i++) {
    if (carsArray.includes(i)) {
      cells[i].classList.add('car')
    }
  }
}
function loadLogs() {
  for (let i = 0; i < 273; i++) {
    if (logArray.includes(i)) {
      cells[i].classList.add('log')
    }
  }
}
function loadLogsDark() {
  for (let i = 0; i < 273; i++) {
    if (logArrayDark.includes(i)) {
      cells[i].classList.add('log1')
    }
  }
}




function loadGrass() {

  for (let i = 272; i < 289; i++) {
    cells[i].classList.add('grass')
  }
  for (let i = 0; i < 17; i++) {
    cells[i].classList.add('grass-finish')
  }
  for (let i = 85; i < 170; i++) {
    cells[i].classList.add('grass')
  }
}

function loadSpikes() {
  cells[153].classList.add('spike')
  cells[157].classList.add('spike')
  cells[162].classList.add('spike')
  cells[168].classList.add('spike')
  cells[121].classList.add('spike')
  cells[139].classList.add('spike')
  cells[119].classList.add('spike')
  cells[90].classList.add('spike')
  cells[110].classList.add('spike')
  cells[131].classList.add('spike')
  cells[117].classList.add('spike')
  cells[142].classList.add('spike')

}


// function loadLilypad() {
//   cells[12].classList.add('lilypad')
//   cells[8].classList.add('lilypad')
//   cells[4].classList.add('lilypad')
// }



function loadRock() {
  cells[0].classList.add('rock')
  cells[1].classList.add('rock')
  cells[2].classList.add('rock')
  cells[3].classList.add('rock')
  cells[4].classList.add('rock')
  cells[5].classList.add('rock')
  cells[6].classList.add('rock')
  cells[7].classList.add('rock')
  cells[9].classList.add('rock')
  cells[10].classList.add('rock')
  cells[11].classList.add('rock')
  cells[12].classList.add('rock')
  cells[13].classList.add('rock')
  cells[14].classList.add('rock')
  cells[15].classList.add('rock')
  cells[16].classList.add('rock')

}




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





function movementOfFrog() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (frog === cells.length - 1) {
        return
      }
      cells[frog].classList.remove('frog')
      cells[frog].classList.remove('frog-right')
      cells[frog].classList.remove('frog-left')
      cells[frog].classList.remove('frog-down')
      frog += 1

      cells[frog].classList.add('frog-right')
    } else if (event.key === 'ArrowLeft') {
      if (frog === 0) {
        return
      }
      cells[frog].classList.remove('frog')
      cells[frog].classList.remove('frog-right')
      cells[frog].classList.remove('frog-left')
      cells[frog].classList.remove('frog-down')
      frog -= 1
      cells[frog].classList.add('frog-left')
    } else if (event.key === 'ArrowUp') {
      if (frog < widthOfGrid) {
        return
      }
      cells[frog].classList.remove('frog')
      cells[frog].classList.remove('frog-right')
      cells[frog].classList.remove('frog-down')
      cells[frog].classList.remove('frog-left')
      frog -= widthOfGrid
      cells[frog].classList.add('frog')
    } else if (event.key === 'ArrowDown') {
      if (frog > cells.length - widthOfGrid - 1) {
        return
      }
      cells[frog].classList.remove('frog')
      cells[frog].classList.remove('frog-right')
      cells[frog].classList.remove('frog-left')
      cells[frog].classList.remove('frog-down')
      frog += widthOfGrid
      cells[frog].classList.add('frog-down')
    }
    FrogFinish()
    frogDie()
    frogDieOnSpike()
    frogAndRock()
    frogDieInWater()


  })
}


function moveCar() {
  setInterval(() => {
    for (let i = 0; i < carsArray.length; i++) {
      if (leftWall.includes(carsArray[i])) {
        cells[carsArray[i]].classList.remove('car')
        carsArray[i] += widthOfGrid
        cells[carsArray[i]].classList.add('car')
      }
      cells[carsArray[i]].classList.remove('car')
      carsArray[i]--
      cells[carsArray[i]].classList.add('car')
    }
    frogDie()
    const grid = document.querySelector('.grid')
    const gameOver = document.querySelector('.game-over')
    const resetButton = document.querySelector('.reset-button')
    const livesCounter = document.querySelector('.lives-counter')
    if (lives === 0) {
      grid.style.display = 'none'
      gameOver.style.display = 'block'
      livesCounter.style.display = 'none'
      resetButton.style.display = 'block'
    }
  }, 1000)
}

function moveLog() {
  setInterval(() => {
    movedFrog = false
    for (let i = 0; i < logArray.length; i++) {
      if (rightWall.includes(logArray[i])) {
        cells[logArray[i]].classList.remove('log')
        cells[logArray[i]].classList.add('river')
        cells[logArray[i] - 1].classList.remove('log')
        cells[logArray[i] - 1].classList.add('river')
        logArray[i] -= widthOfGrid
        // cells[logArray[i]].classList.add('log')
      }


      // cells[logArray[i]].classList.remove('log')
      logArray[i]++

      cells[logArray[i]].classList.remove('river')
      cells[logArray[i]].classList.add('log')
      if ((cells[logArray[i] - 1].classList.contains('frog')) && !movedFrog) {
        frog++
        cells[frog].classList.add('frog')
        cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
        movedFrog = true

      } else if ((cells[logArray[i] - 1].classList.contains('frog-left')) && !movedFrog) {
        frog++
        cells[frog].classList.add('frog-left')
        cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
        movedFrog = true

      } else if ((cells[logArray[i] - 1].classList.contains('frog-right')) && !movedFrog) {
        frog++
        cells[frog].classList.add('frog-right')
        cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
        movedFrog = true

      } else if ((cells[logArray[i] - 1].classList.contains('frog-down')) && !movedFrog) {
        frog++
        cells[frog].classList.add('frog-down')
        cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
        movedFrog = true
      }

      cells[logArray[i] - 1].classList.remove('river')
      cells[logArray[i] - 1].classList.add('log')


      cells[logArray[i] - 2].classList.remove('log')
      cells[logArray[i] - 2].classList.add('river')
      cells[logArray[i] - 2].classList.remove('frog')

      /////////
      // frogMoveWithLog()
    }

    // frogDieInWater()

  }, 1300)
}




// function frogAndLog() {
//   for (let i = 0; i < gridCellCount; i++)
//     if (cells[i].className.includes('log') && cells[i].className.includes('frog')) {
//       // cells[logArray[i]].classList.remove('log')
//       frog++
//       logArray[i]++
//       cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
//       cells[frog].classList.add('frog')
//       // console.log(frog, logArray[i])
//       // cells[logArray[i]].classList.remove('river')
//       // cells[logArray[i]].classList.add('log')
//       // cells[logArray[i] - 1].classList.remove('river')
//       // cells[logArray[i] - 1].classList.add('log')
//       // cells[logArray[i] - 2].classList.remove('log')
//       // cells[logArray[i] - 2].classList.add('river')
//     }
// }



function moveLog2() {
  setInterval(() => {
    movedFrog = false
    for (let i = 0; i < logArrayDark.length; i++) {
      if (rightWall.includes(logArrayDark[i])) {
        cells[logArrayDark[i]].classList.remove('log1')
        cells[logArrayDark[i]].classList.add('river')
        cells[logArrayDark[i] - 1].classList.remove('log1')
        cells[logArrayDark[i] - 1].classList.add('river')
        logArrayDark[i] -= widthOfGrid
        // cells[logArray[i]].classList.add('log')
      }


      // cells[logArray[i]].classList.remove('log')
      logArrayDark[i]++

      cells[logArrayDark[i]].classList.remove('river')
      cells[logArrayDark[i]].classList.add('log1')
      if ((cells[logArrayDark[i] - 1].classList.contains('frog')) && !movedFrog) {
        frog++
        cells[frog].classList.add('frog')
        cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
        movedFrog = true

      } else if ((cells[logArrayDark[i] - 1].classList.contains('frog-left')) && !movedFrog) {
        frog++
        cells[frog].classList.add('frog-left')
        cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
        movedFrog = true

      } else if ((cells[logArrayDark[i] - 1].classList.contains('frog-right')) && !movedFrog) {
        frog++
        cells[frog].classList.add('frog-right')
        cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
        movedFrog = true

      } else if ((cells[logArrayDark[i] - 1].classList.contains('frog-down')) && !movedFrog) {
        frog++
        cells[frog].classList.add('frog-down')
        cells[frog - 1].classList.remove('frog', 'frog-left', 'frog-right', 'frog-down')
        movedFrog = true
      }

      cells[logArrayDark[i] - 1].classList.remove('river')
      cells[logArrayDark[i] - 1].classList.add('log1')


      cells[logArrayDark[i] - 2].classList.remove('log1')
      cells[logArrayDark[i] - 2].classList.add('river')
      cells[logArrayDark[i] - 2].classList.remove('frog')
    }
  }, 1000)
}





function frogDie() {
  const livesCounter = document.querySelector('.lives-counter')
  const cellWithFrogAndCar = cells.find((element) => {
    return element.className.includes('frog') && element.className.includes('car')
  })
  if (cellWithFrogAndCar) {
    cellWithFrogAndCar.classList.remove('frog')
    cellWithFrogAndCar.classList.remove('frog-left')
    cellWithFrogAndCar.classList.remove('frog-right')
    cellWithFrogAndCar.classList.remove('frog-down')
    frog = 280
    cells[frog].classList.add('frog')
    livesCounter.innerHTML = `lives: ${lives -= 1}`
  }
}


function frogDieOnSpike() {
  const livesCounter = document.querySelector('.lives-counter')
  const cellWithFrogAndSpike = cells.find((element) => {
    return element.className.includes('frog') && element.className.includes('spike')
  })
  if (cellWithFrogAndSpike) {
    cellWithFrogAndSpike.classList.remove('frog')
    cellWithFrogAndSpike.classList.remove('frog-left')
    cellWithFrogAndSpike.classList.remove('frog-right')
    cellWithFrogAndSpike.classList.remove('frog-down')
    frog = 280
    cells[frog].classList.add('frog')
    livesCounter.innerHTML = `lives: ${lives -= 1}`
  }
}

function frogAndRock() {
  const livesCounter = document.querySelector('.lives-counter')
  const cellWithFrogAndRock = cells.find((element) => {
    return element.className.includes('frog') && element.className.includes('rock')
  })
  if (cellWithFrogAndRock) {
    cellWithFrogAndRock.classList.remove('frog')
    cellWithFrogAndRock.classList.remove('frog-left')
    cellWithFrogAndRock.classList.remove('frog-right')
    cellWithFrogAndRock.classList.remove('frog-down')
    // return cellWithFrogAndRock - widthOfGrid
    frog = 280
    cells[frog].classList.add('frog')
    livesCounter.innerHTML = `lives: ${lives -= 1}`
  }
}

function frogDieInWater() {
  const livesCounter = document.querySelector('.lives-counter')
  const cellWithFrogAndRiver = cells.find((element) => {
    if (element.className.includes('frog') && element.className.includes('river')) {
      console.log('element classname ', element.className, element)
    }
    return element.className.includes('frog') && element.className.includes('river')
  })
  if (cellWithFrogAndRiver) {
    cellWithFrogAndRiver.classList.remove('frog')
    cellWithFrogAndRiver.classList.remove('frog-left')
    cellWithFrogAndRiver.classList.remove('frog-right')
    cellWithFrogAndRiver.classList.remove('frog-down')
    frog = 280
    cells[frog].classList.add('frog')
    livesCounter.innerHTML = `lives: ${lives -= 1}`
  }
  const grid = document.querySelector('.grid')
  const gameOver = document.querySelector('.game-over')
  const resetButton = document.querySelector('.reset-button')
  if (lives === 0) {
    grid.style.display = 'none'
    gameOver.style.display = 'block'
    livesCounter.style.display = 'none'
    resetButton.style.display = 'block'
  }
}

function FrogFinish() {
  const livesCounter = document.querySelector('.lives-counter')
  const resetButton = document.querySelector('.reset-button')
  const grid = document.querySelector('.grid')
  const finish = document.querySelector('.finish')
  cells.find((element) => {
    if (element.className.includes('frog') && element.className.includes('grass-finish')) {
      console.log('hello you bastard')
      grid.style.display = 'none'
      livesCounter.style.display = 'none'
      resetButton.style.display = 'none'
      finish.style.display = 'block'
    }

  })

}

// cells.find((element) => {
//   if (element.className.includes('frog') && element.className.includes('grass-finish')) {
//     grid.style.display = 'none'
//     livesCounter.style.display = 'none'
//     resetButton.style.display = 'none'
//   }
// })


// function frogMoveWithLog() {
//   const cellWithFrogAndLog = cells.find((element) => {
//     return element.className.includes('frog', 'frog-left', 'frog-right', 'frog-down') && element.className.includes('log')
//   })
//   if (cellWithFrogAndLog) {
//     frog = cells.indexOf(cellWithFrogAndLog) + 1
//     console.log(frog)
//     cells[frog].classList.add('frog')
//     cells[frog - 1].classList.remove('frog')
//     cells[frog - 1].classList.remove('frog-left')
//     cells[frog - 1].classList.remove('frog-right')
//     cells[frog - 1].classList.remove('frog-down')

//   }
// }




// const frogPosition = cells.indexOf('frog')
// console.log(frogPosition)
// if ( === ) { //  && [cells].classList.contains('car') === true
//   cells.classList.remove('frog')
//   cells.classList.remove('frog-left')
//   cells.classList.remove('frog-right')
//   cells.classList.remove('frog-down')
//   cells[280].classList.add('frog')
//   // return frog === 280
// }



// function frogDie () {
//   if (cells.includes(frog) && cells.includes(carsArray)) {
//     cells.classList.remove('frog')
//     cells.classList.remove('frog-left')
//     cells.classList.remove('frog-right')
//     cells.classList.remove('frog-down')
//     // cells[280].classList.add('frog')
//     return frog

//   }
// }








// function moveCar1() {
// intervalId1 = setInterval(() => {
//   cells[271].classList.add('car')
// }, 2000 )

// setInterval(() => {
//   cells[271].classList.remove('car')
//   cells[270].classList.add('car')
// }, 4000)

// setInterval(() => {
//   cells[270].classList.remove('car')
//   cells[269].classList.add('car')
// }, 6000)

// setInterval(() => {
//   cells[269].classList.remove('car')
//   cells[268].classList.add('car')
// }, 8000)

// const startPosition = 271

// const intervalId1 = setInterval(() => {
//   let tempStartPosition = 271
//   cells[startPosition].classList.add('car')
//   setInterval(() => {
//     cells[tempStartPosition].classList.remove('car')
//     cells[tempStartPosition -= 1].classList.add('car')
//     // if (cells[254].classList.contains('car') === true)  {
//     //   cells[254].classList.remove('car')
//     //   return tempStartPosition
//     // }

//     for (let i = 0; i < 255; i++) {
//       cells[i].classList.remove('car')
//     }
//   }, 1000)
// }, 3000)
// }



// function moveCar2() {
//   const intervalId2 = setInterval(() => {
//     let tempStartPosition2 = 237
//     cells[tempStartPosition2].classList.add('car2')
//     setInterval(() => {
//       cells[tempStartPosition2].classList.remove('car2')
//       cells[tempStartPosition2 -= 1].classList.add('car2')


//       for (let i = 0; i < 221; i++) {
//         cells[i].classList.remove('car2')
//       }
//     }, 500)
//   }, 2000)
// }



// function moveCar3() {
//   const intervalId3  = setInterval(() => {
//     let tempStartPosition3 = 203
//     cells[tempStartPosition3].classList.add('car3')
//     setInterval(() => {
//       cells[tempStartPosition3].classList.remove('car3')
//       cells[tempStartPosition3 -= 1].classList.add('car3')


//       for (let i = 0; i < 187; i++) {
//         cells[i].classList.remove('car3')
//       }
//     }, 500)
//   }, 3000)
// }















