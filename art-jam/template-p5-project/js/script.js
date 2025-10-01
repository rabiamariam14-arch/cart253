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
let flowerX = [];
let flowerY = [];
let totalFlowers = 20;

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < totalFlowers; i++) {
        flowerX[i] = random(0, 800);
        flowerY[i] = random(-400, 0);
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(245);

    //window

    if (mouseX > 100) {
        fill(0, 0, 128)
    } else {
        fill(200, 220, 250)
    }
    rect(100, 120, 340, 300)

    // door
    
    fill(200, 220, 250);
    ellipse(610, 200, 220, 200);
    rect(500, 200, 220, 400);
    stroke(255, 255, 255);
    strokeWeight(7);
    
    //FLOWERS

    fill(255, 100, 150);
    for (let i = 0; i < totalFlowers; i++){
        ellipse(flowerX[i], flowerY[i], 20, 20)
        
        flowerY[i] = flowerY[i] + 2;

        if (flowerY[i]>height) {
            flowerY[i] = 0;
            flowerX[i] = random(0, 800);
        }
    }
}
    
