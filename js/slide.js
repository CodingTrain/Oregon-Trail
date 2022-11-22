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
    let prefixOffset = "";
    if(prefix){
      for (var i = 0; i < prefix.length; i++) {
        prefixOffset += " "
      }
    }
    let x = this.renderPosition.x + indent * this.fontSize;
    for (var i = 0; i < lines.length; i++) {
      let str = lines[i];
      if(prefix){
        if(i == 0){
          str = prefix + str;
        }else{
          str = prefixOffset + str;
        }
      }
      text(str, x, this.renderPosition.y);
      this.newLine();
    }
  }

  renderListText(indent, list){
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      this.renderText(indent, item, ((i+1) + '. '));
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
    this.newLine();
    this.renderBar();
  }
}
