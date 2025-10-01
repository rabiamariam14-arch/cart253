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
let flowerX;
let flowerY;
function setup() {
    createCanvas(800, 600);
    flowerX = width / 2
    flowerY = -20
    ellipseMode(CENTER)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(245);

    if (mouseX > width / 2) {
        fill(255,230,180)
    } else {
        fill(200,220,250)
    }
    rect(100,100, 100, 120)


}

