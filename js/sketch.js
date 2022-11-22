let data;
let stateManager;

function preload() {
  data = loadJSON('data/slide_data.json');
}

let slides = [];
let currentSlide = 0;

let playerInput;

function setup() {
  createCanvas(280 * 2, 192 * 2);

  stateManager = new GameStateManager();

  for (let i = 0; i < data.slides.length; i++) {
    slides[i] = new Slide(data.slides[i]);
  }

  playerInput = new Input(slides[currentSlide]);
}

function keyPressed() {
  const result = playerInput.addKey(key, keyCode);

  // Temporary mechanism for going to the next slide
  if (result == 1) currentSlide++;
}

function draw() {
  background(0);
  const slide = slides[currentSlide];
  slide.render();
  playerInput.render();
}
