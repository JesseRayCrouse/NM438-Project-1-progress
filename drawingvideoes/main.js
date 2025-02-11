function setup() {
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

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
function mouseDragged(){
    const color = document.querySelector("#color").value;
    fill(color);
    stroke(color);
    const size = document.querySelector("#size").value;
    circle(mouseX, mouseY, size);
    const outlineWidth = document.querySelector("#color").value;
    const outlineColor = document.querySelector("#color").value;
    
    fill(color);
    //stroke(outlineColor);
    //strokeWeight(Number(outlineWidth));
    
   
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

