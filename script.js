let cube = document.querySelector(".gamecube")
let size = document.querySelector('.input').value
let clear = document.querySelector('.clear')
let square = document.querySelectorAll(".gamecube > .square")

function makeGrid (size) {
    cube.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    cube.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i = 0; i < size * size; i++){
        let square = document.createElement('div')
        square.className = "square"
        cube.insertAdjacentElement('beforeend', square)
        square.addEventListener('click', colorGrid )
        function colorGrid() {
            square.style.backgroundColor = 'black'
        }
    }
}

makeGrid(16)

function eraser() {
    cube.style.backgroundColor = "white"
    console.log('reset')
}

clear.addEventListener('click', eraser)

