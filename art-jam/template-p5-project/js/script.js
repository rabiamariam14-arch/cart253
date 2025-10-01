/**
 * DAFLA
 * MARIAM RABIA
 * 
 * A REPRESANTATION OF MY CHILDHOOD ROOM WITH A NEW INTERPRETATION
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let flowerX = 200;
let flowerY = 0;

function setup() {
    createCanvas(800, 600);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(245);
    //window
    if (mouseX > width / 2) {
        fill(255, 230, 180)
    } else {
        fill(200, 220, 250)
    }
    rect(100, 120, 340, 300)
    // door
    
    fill(200, 220, 250);
    rect(500, 200, 220, 400)
    ellipse(610, 200, 220, 200)
    noStroke()
    //body
    // fill(160, 100, 60);
    //rect(420, 300, 80, 120);
    //head
    //fill(255, 220, 200);
    //ellipse(420, 300, 80, 120);

    //let extra = frameCount % 20;
    //hairLength = map(mouseY, 0, height, 80, 150);
    // fill(60, 40, 20);
    // rect(420, 240 + hairLength / 2, 70, hairLength + extra);
    
    
    //FLOWERS
    fill(255, 100, 150);
    ellipse(flowerX, flowerY, 20, 20);

    flowerY = flowerY + 2;
    if (flowerY > height) {
        flowerY = 0;
        flowerX = random(50,350);
    }

}