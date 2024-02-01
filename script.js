let cube = document.querySelector(".gamecube")
let clear = document.querySelector(".clear")

let size = prompt("Enter how many squares you want (Max:100)")
if (size < 100) {
	makeGrid(size)
} else {
	alert("not a number under 100! Click Change Grid Size to play!")
}

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

function colorGrid(e) {
	e.target.style.backgroundColor = "black"
}

