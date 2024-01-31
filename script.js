let cube = document.querySelector(".gamecube")
let size = document.querySelector(".input")
let clear = document.querySelector(".clear")
let draw = document.querySelector('.draw')
let eraser = document.querySelector('.eraser')

function makeGrid(size) {
	cube.style.gridTemplateColumns = `repeat(${size}, 1fr)`
	cube.style.gridTemplateRows = `repeat(${size}, 1fr)`
	for (i = 0; i < size * size; i++) {
		let square = document.createElement("div")
		square.className = "square"
		cube.insertAdjacentElement("beforeend", square)
		square.addEventListener("mouseover", colorGrid)
		clear.addEventListener("click", eraser)
        function eraser() {
            square.style.backgroundColor = "white"
        }
	}
}

let color = true

function setBlack() {
    color = true
}

function setWhite() {
    color = false
}

draw.onclick = () => setBlack
eraser.onclick = () => setWhite

function colorGrid(e, color) {
    if (color = true){
        e.target.style.backgroundColor = 'black'
    } else if ( color = 2){
        e.target.style.backgroundColor = 'white'
    } 
}
console.log(color)
size.value ? makeGrid(size.value) : makeGrid(16)
