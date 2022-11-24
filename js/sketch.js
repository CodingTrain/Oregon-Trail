p5.disableFriendlyErrors = true;

// temporary
const SETTINGS = {
    sound: true,
    scale: 4,
};

let data;
let stateManager;

function preload() {
    data = loadJSON("data/page_data.json");
}

let slideManager;

let playerInput;

function setup() {
    createCanvas(280 * SETTINGS.scale, 192 * SETTINGS.scale);

    stateManager = new GameStateManager();

    slideManager = new SlideManager(data);
    playerInput = new Input(slideManager.getCurrentSlide());
}

function keyPressed() {
    const result = playerInput.addKey(key, keyCode);
    slideManager.performActionByInput(result);
    playerInput.updateParent(slideManager.getCurrentSlide());
}

function draw() {
    background(0);
    slideManager.render();
    playerInput.render();
}

function toggleSetting(setting) {
    SETTINGS[setting] = !SETTINGS[setting];
}