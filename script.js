let cube = document.querySelector(".gamecube")
let size = document.querySelector(".input")
let clear = document.querySelector(".clear")

function makeGrid(size) {
	cube.style.gridTemplateColumns = `repeat(${size}, 1fr)`
	cube.style.gridTemplateRows = `repeat(${size}, 1fr)`
	for (i = 0; i < size * size; i++) {
		let square = document.createElement("div")
		square.className = "square"
		cube.insertAdjacentElement("beforeend", square)
		square.addEventListener("click", colorGrid)
		clear.addEventListener("click", eraser)
	}
}

function colorGrid(e) {
    e.target.style.backgroundColor = "black"
}
function eraser(e) {
    e.target.style.backgroundColor = "white"
}

size.value ? makeGrid(size.value) : makeGrid(16)
