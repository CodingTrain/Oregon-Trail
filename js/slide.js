class Slide {
  constructor(json) {
    this.bar = loadImage('img/bar.png');

    this.prompt = json.prompt;
    this.choices = json.choices;
    if (json.img.length != 0) this.img = loadImage(json.img);
    this.title = json.title;

    let content = json.content;
    if (content.font.file) {
      this.font = loadFont(content.font.file);
    } else {
      this.font = content.font.name;
    }
    this.fontSize = content.font.size;
    this.textIndent = content.textIndent;

    this.renderPosition = createVector();
  }

  resetRenderPosition() {
    this.renderPosition.set(0, 0);
  }

  newLine() {
    this.renderPosition.y += this.fontSize;
  }

  renderText(indent, str) {
    let x = this.renderPosition.x + (indent + this.textIndent) * this.fontSize;
    text(str, x, this.renderPosition.y);
    this.newLine();
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
    } else {
      this.renderBar();
      this.newLine();
      this.renderText(0, this.title);
      this.newLine();
    }
    this.renderText(0, 'You may:');
    this.newLine();
    for (let i = 0; i < this.choices.length; i++) {
      let choice = this.choices[i];
      if (choice instanceof Array == false) {
        choice = [choice];
      }
      for (let c = 0; c < choice.length; c++) {
        let str = choice[c];
        if (c == 0) str = i + 1 + '. ' + str;
        this.renderText(c == 0 ? 1 : 2, str);
      }
    }
    this.newLine();
    this.renderText(0, this.prompt);
    this.newLine();
    this.renderBar();
  }
}
