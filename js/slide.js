class Slide {
  constructor(json) {
    this.name = json.name;
    this.type = json.type; // doesn't do anything yet

    this.loadFromJSON(json.data);

    this.renderPosition = createVector();

    // For the input prompt
    this.promptPosition = createVector();
    this.promptLimit = 1;

    this.bar = loadImage('img/bar.png');
  }

  loadFromJSON(data) {
    this.prompt = data.prompt;
    this.choices = data.choices;
    if (data.img.length != 0) this.img = loadImage(data.img);
    this.title = data.title;

    let content = data.content;
    if (content.font.file) {
      this.font = loadFont(content.font.file);
    } else {
      this.font = content.font.name;
    }
    this.fontSize = content.font.size * SETTINGS.scale;
    this.textIndent = content.textIndent;
  }

  resetRenderPosition() {
    let x = this.textIndent * this.fontSize;
    this.renderPosition.set(x, 0);
  }

  newLine() {
    this.renderPosition.y += this.fontSize;
  }

  renderText(indent, lines, prefix) {
    if (lines instanceof Array == false) {
      lines = [lines];
    }
    let x = this.renderPosition.x + indent * this.fontSize;
    for (var i = 0; i < lines.length; i++) {
      let str = lines[i];
      const usePrefix = prefix != undefined && i == 0;
      // I don't know a better way, without the two if statements
      // If you know, please make it better
      if (usePrefix) {
        str = prefix + str;
      }
      text(str, x, this.renderPosition.y);
      if (usePrefix) {
        x += textWidth(prefix);
      }
      this.newLine();
    }
  }

  renderListText(indent, list) {
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      if (item instanceof Object) {
        item = item.text;
      }
      this.renderText(indent, item, i + 1 + '. ');
    }
  }

  renderImg(img) {
    let h = (width / img.width) * img.height;
    image(img, 0, this.renderPosition.y, width, h);
    this.renderPosition.y += h;
  }

  renderBar() {
    this.renderImg(this.bar);
  }

  render() {
    textFont(this.font);
    textAlign(LEFT, CENTER);
    textSize(this.fontSize);
    textLeading(this.fontSize);

    fill(255);
    noStroke();

    imageMode(CORNER);

    this.resetRenderPosition();

    if (this.img) {
      this.renderImg(this.img);
      this.renderBar();
    } else {
      this.renderBar();
      this.newLine();
      this.renderText(0, this.title);
      this.newLine();
    }
    this.renderText(0, 'You may:');
    this.newLine();
    this.renderListText(1, this.choices);
    this.newLine();
    this.renderText(0, this.prompt);

    // Set the cursor position
    this.promptPosition.set(this.renderPosition);
    this.promptPosition.x += textWidth(this.prompt + ' ');
    this.promptPosition.y -= this.fontSize;

    this.newLine();
    this.renderBar();
  }
}
