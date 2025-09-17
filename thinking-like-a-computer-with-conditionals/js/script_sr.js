
let ellipseSize = 100;

function setup() {
    createCanvas(400, 600);
    ellipseSize

}


function draw() {
    background(0);
    push();
    ellipseSize = 25;
    //color of ellipse
    fill(255, 0, 0);
    //x,y,width,height
    ellipse(width/2,height/2, ellipseSize, ellipseSize);
    pop();


}
