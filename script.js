// cube = document.getElementsByClassName("gamecube")

function makeGrid (size) {
    let cube = document.querySelector(".gamecube")
    cube.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    cube.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i = 0; i < size * size; i++){
        let square = document.createElement('div')
        cube.insertAdjacentElement('beforeend', square)
    }
}

makeGrid(16)