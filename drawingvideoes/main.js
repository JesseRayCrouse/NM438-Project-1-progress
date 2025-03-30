

function changePage1() {
    window.location.href = "deer.html";
}

function changePage2() {
    window.location.href = "bear.html";
}

function changePage3() {
    window.location.href = "bass.html";
}

function changePage4() {
    window.location.href = "../games.html";
}

let currentColor = 'black';

function setup() {
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');

    const colorButtons = document.querySelectorAll('.color');
    colorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            currentColor = event.target.value;
            changeValue(currentColor);
        });
    });
}

function changeValue(color) {
    fill(color);
    stroke(color);  

    const colorIndicator = document.getElementById('colorIndicator');
    colorIndicator.style.backgroundColor = color;
}

const sizeSlider = document.querySelector("#size");
const sizeValueDisplay = document.querySelector("#sizeValue");


sizeSlider.addEventListener('input', () => {
    const size = sizeSlider.value;
    sizeValueDisplay.textContent = size; 
});

function mouseDragged() {
    const size = document.querySelector("#size").value;
    const shape = "circle"; 

    fill(currentColor);
    stroke(currentColor);
    
    if (shape === "circle") {
        circle(mouseX, mouseY, size);
    } else if (shape === "square") {
        square(mouseX, mouseY, Number(size), 3, 3, 3, 3);
    } else {
        const r = size / 2;
        triangle(
            mouseX,
            mouseY - r,
            mouseX - r,
            mouseY + r,
            mouseX + r,
            mouseY + r,
        ); 
    }
}