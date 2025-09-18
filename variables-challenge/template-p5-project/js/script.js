/**
 * Mr. Furious
 * Mariam Rabia
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious

let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};
let sky = {
  fill: {
    r: 160,
    g: 180,
    b: 200
  }
};

let bird = {
    x: 100,
    y:100
}


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(sky.fill.r, sky.fill.g, sky.fill.b);
    sky.fill.g = sky.fill.g-1
    sky.fill.b = sky.fill.b-1
    sky.fill.r = sky.fill.r-1
     
  // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
      mrFurious.fill.g = mrFurious.fill.g-1
      mrFurious.fill.b = mrFurious.fill.b-1
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    mrFurious.x = mrFurious.x+ random(-1,1);
    //mrFurious.y = random(100, height);
    mrFurious.size = random(1, 50);
    pop();
    flyingCreatures(bird.x, bird.y)
    bird.x = bird.x + 1 
}

function flyingCreatures(x, y) {
    stroke(255,255,255)
    noFill()
    arc(x, y, 50, 50, radians(270), 0)
    arc(x + 50, y, 50, 50, radians(180), radians(-90))


 }
