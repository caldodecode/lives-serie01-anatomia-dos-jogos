import "./main.scss"

const body = document.body

const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

canvas.height = 400
canvas.width = 500

body.append(canvas)

// ------------- 


let mousePos = { x: 0, y: 0 }
let button = false
let color

function getMousePosition(ev: MouseEvent) {
    mousePos.x = ev.offsetX
    mousePos.y = ev.offsetY
}

function getKey(ev: Event) {
    button = !button
}

canvas.addEventListener("mousemove", getMousePosition)
// document.addEventListener("keydown", getKey)
// document.addEventListener("keyup", getKey)


let hit = false

function mainLoop() {
    // input
    hit = (
        // ponto superior esquerdo
        (mousePos.x > 150 && mousePos.y > 150) &&
        (mousePos.x < 250 && mousePos.y < 250) ||
        // ponto inferior direito
        (mousePos.x + 100 > 150 && mousePos.y + 100 > 150) &&
        (mousePos.x + 100 < 250 && mousePos.y + 100 < 250) ||
        // ponto superior direito
        (mousePos.x + 100 > 150 && mousePos.y > 150) &&
        (mousePos.x + 100 < 250 && mousePos.y < 250) ||
        // ponto inferior esquerdo
        (mousePos.x > 150 && mousePos.y + 100 > 150) &&
        (mousePos.x < 250 && mousePos.y + 100 < 250)
    ) 

    // update
    color = hit ? "#00FF00" : "#FF0000"

    // render
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "#0000FF"
    context.fillRect(150, 150, 100, 100)
    context.fillStyle = color
    context.fillRect(mousePos.x, mousePos.y, 100, 100)

    // restart loop
    requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)