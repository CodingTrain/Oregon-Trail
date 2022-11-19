function setup() {
  createCanvas(280 * 2, 192 * 2);
}

function draw() {
  background(0);
  textFont("VT323");
  textAlign(CENTER, CENTER);
  textSize(64);
  fill(255);
  noStroke();
  text("The Oregon Trail", width / 2, height / 2);
  noLoop();
}
