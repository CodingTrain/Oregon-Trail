let data;

function preload() {
  data = loadJSON('data/slide_data.json');
}

let slides = [];
let currentSlide = 0;

let playerInput;

function setup() {
  createCanvas(280 * 2, 192 * 2);

  // Placing an input just in the bottom
  playerInput = new Input(width / 2, height - 50);

  for (let i = 0; i < data.slides.length; i++) {
    slides[i] = new Slide(data.slides[i]);
  }
}

function keyPressed() {
  playerInput.addKey(key, keyCode);
}

function draw() {
  background(0);
  const slide = slides[currentSlide];
  slide.render();
  playerInput.render(slide);
}

function mousePressed() {
  // currentSlide = (currentSlide + 1) % slides.length;
}
