function main() {

  // call functions here to display front page 
  loadGrid()
  movementOfFrog()
  loadRiver()
  loadRoad()
  loadGrass()
  loadLilypad()
  loadSpikes()
  loadRock()
  moveCar1()

}
window.addEventListener('DOMContentLoaded', main)



// let river = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]


let frog = 280
const cells = []
const widthOfGrid = 17
const gridCellCount = widthOfGrid * widthOfGrid


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



function loadGrass() {

  for (let i = 272; i < 289; i++) {
    cells[i].classList.add('grass')
  }
  for (let i = 0; i < 17; i++) {
    cells[i].classList.add('grass')
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


function loadLilypad() {
  cells[12].classList.add('lilypad')
  cells[8].classList.add('lilypad')
  cells[4].classList.add('lilypad')
}



function loadRock() {
  cells[0].classList.add('rock')
  cells[1].classList.add('rock')
  cells[2].classList.add('rock')
  cells[3].classList.add('rock')
  cells[5].classList.add('rock')
  cells[6].classList.add('rock')
  cells[7].classList.add('rock')
  cells[9].classList.add('rock')
  cells[10].classList.add('rock')
  cells[11].classList.add('rock')
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
  })
}

function moveCar1() {
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
  const startPosition = 271
  const intervalId1 = setInterval(() => {
    let tempStartPosition = 271
    cells[startPosition].classList.add('car')
    setInterval(() => {
      cells[tempStartPosition].classList.remove('car')
      cells[tempStartPosition -= 1].classList.add('car')
    }, 1000)
  }, 3000)
}














