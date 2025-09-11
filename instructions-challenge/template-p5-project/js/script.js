/**
 * LANDY
 * Mariam Rabia
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

 /**
 * Creates the canvas
*/
function setup() {
    createCanvas(800, 400);
    
}
function draw() {
    Land()
    Sky()
    Sun()
    flyingCreatures(130, 100)
    flyingCreatures(220, 120)
    landBased()
    house ()

 }
function Land() {
    background(0, 225, 0);
    
 }
function Sky() {
    noStroke()
    fill(0, 0 , 255)
    rect(0, 0, 2000, 225)
 }

function Sun() { 
    fill(255,255,0)
    ellipse(50, 50, 50, 50)
}

function flyingCreatures(x, y) {
    stroke(0 )
    noFill()
    arc(x, y, 50, 50, radians(270), 0)
    arc(x + 50, y, 50, 50, radians(180), radians(-90))


 }

function landBased() {
    line(300,180,340,180)
    line(330,225,320,200)
    line(310,225,320,200)
    line(320,200, 320, 150)
    fill(0,0,0)
    ellipse(320,150,28,28)
}
    
function house() {
    fill(0,0,0)
    triangle(390,125,510, 125, 450,40)
    fill(165,42,42)
    rect(400, 125, 100, 100)
    fill(255, 0, 127)
    rect(434,150,30,30)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/