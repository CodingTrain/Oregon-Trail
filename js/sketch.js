p5.disableFriendlyErrors = true;

// temporary
const SETTINGS = {
  sound: true,
  scale: 2,
  language: 'en',
};

let data;
let stateManager;

function preload() {
  data = loadJSON('data/page_data.json');
}

let pageManager;

let playerInput;

function setup() {
  createCanvas(280 * SETTINGS.scale, 192 * SETTINGS.scale);

  stateManager = new GameStateManager();

  pageManager = new PageManager(data);
  playerInput = new Input(pageManager.getCurrentPage());
}

function keyPressed() {
  const result = playerInput.addKey(key, keyCode);
  pageManager.performActionByInput(result);
  playerInput.updateParent(pageManager.getCurrentPage());
}

function draw() {
  background(0);
  pageManager.render();
  playerInput.render();
}

function toggleSetting(setting) {
  SETTINGS[setting] = !SETTINGS[setting];
}
