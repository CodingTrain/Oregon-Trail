
let data;
let stateManager;

function preload() {
  data = loadJSON('data/slide_data.json');
}

let slides = [];
let currentSlide = 0;

function setup() {
  createCanvas(280 * 2, 192 * 2);
  
  stateManager = new GameStateManager();

  for (let i = 0; i < data.slides.length; i++) {
    slides[i] = new Slide(data.slides[i]);
  }

}

function draw() {
  background(0);
  slides[currentSlide].render();
}

function mousePressed() {
  currentSlide = (currentSlide + 1) % slides.length;
}
