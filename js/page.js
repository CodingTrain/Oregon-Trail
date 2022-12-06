class Page {
  constructor(json, defaultPage) {
    this.loadDefault(defaultPage);
    this.loadPage(json);

    this.renderPosition = createVector();

    // For the input prompt
    this.promptPosition = createVector();
    this.promptLimit = 1;
    this.lastText = '';

    textSize(this.fontSize);
    const ascent = textAscent();
    const descent = textDescent();
    this.textHeight = ascent + descent;

    this.bar = loadImage('img/bar.png');
  }

  // --- LOADING ---

  loadDefault(json) {
    // loads default page variables
    this.loadVariable(json, 'name');
    this.loadVariable(json, 'type');
    this.loadVariable(json, 'showInput');

    const data = json.data;
    if (data !== undefined) {
      this.loadVariable(data, 'title');
      this.loadVariable(data, 'action');
      const content = data.content;
      if (content !== undefined) {
        this.loadContent(content);
      }
    }
  }

  loadPage(json) {
    this.loadDefault(json);

    this.loadData(json.data);
  }

  loadData(data) {
    // used to load specific variables in different page types
  }

  loadContent(content) {
    const font = content.font;
    if (font !== undefined) {
      if (font.file !== undefined) {
        this.font = loadFont(font.file);
      } else {
        this.loadVariable(font, 'name', 'font');
      }

      if (font.size !== undefined) {
        this.fontSize = font.size * SETTINGS.scale;
      }
    }

    this.loadVariable(content, 'textIndent');
  }

  loadVariable(json, key, saveKey) {
    const value = json[key];
    if (value === undefined) return false;

    if (saveKey === undefined) {
      this[key] = value;
    } else {
      this[saveKey] = value;
    }
    return true;
  }

  loadImportantVariable(json, key, saveKey) {
    const loaded = this.loadVariable(json, key, saveKey);
    if (loaded == false) {
      console.log(
        'Important variable (' +
          key +
          ") didn't load, page might not look as intended!\nPage: " +
          this.name
      );
    }
  }

  // --- RENDERING ---

  resetRenderPosition() {
    let x = this.textIndent * this.fontSize;
    this.renderPosition.set(x, 0);
  }

  newLine(total) {
    let offset = this.textHeight;
    if (total !== undefined) offset *= total;
    this.renderPosition.y += offset;
  }

  getLinesFromTextObject(textObject) {
    let lines = textObject[SETTINGS.language];
    if (lines === undefined) {
      if (textObject instanceof Object) {
        lines = Object.values(textObject)[0];
      } else {
        lines = textObject; // if no translations avaiable
      }
    }
    if (lines instanceof Array == false) {
      lines = [lines];
    }
    return lines;
  }

  renderText(indent, textObject, prefix) {
    const lines = this.getLinesFromTextObject(textObject);

    let x = this.renderPosition.x + indent * this.fontSize;

    for (var i = 0; i < lines.length; i++) {
      let str = lines[i];
      const usePrefix = prefix != undefined && i == 0;
      // I don't know a better way, without the two if statements
      // If you know, please make it better
      if (usePrefix) {
        str = prefix + str;
      }

      textAlign(LEFT, TOP);
      const box = {
        x,
        y: this.renderPosition.y,
        w: width - 2 * this.textIndent * this.fontSize,
        h: height - this.renderPosition.y,
      };
      text(str, box.x, box.y, box.w, box.h);
      this.lastText = str;
      if (textWidth(str) > box.w) {
        const bounds = this.font.textBounds(str, box.x, box.y, box.w, box.h);
        this.renderPosition.y += box.y;
      }

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

  renderStart() {
    textFont(this.font);
    textAlign(LEFT, CENTER);
    textSize(this.fontSize);

    fill(255);
    noStroke();

    imageMode(CORNER);

    this.resetRenderPosition();
  }

  updateCursor() {
    // Set the cursor position
    this.promptPosition.set(this.renderPosition);
    this.promptPosition.x += textWidth(this.lastText + ' ');
    this.promptPosition.y -= this.textHeight;
  }
  render() {
    this.renderStart();

    this.newLine();
    this.renderText(0, this.title);
    this.newLine();
    this.renderText(0, ['This page has', 'no existing type: ' + this.type]);
    this.newLine();

    this.updateCursor();
  }

  getAction(input) {
    return {
      action: this.action,
    };
  }

  changeText(changeData) {
    return undefined;
  }
}
