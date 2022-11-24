class Slide {
    constructor(json) {
        this.name = json.name;
        this.type = json.type;
        this.loadFromJSON(json.data);

        this.renderPosition = createVector();

        // For the input prompt
        this.promptPosition = createVector();
        this.promptLimit = 1;
        this.lastText = "";
        this.showInput = json.showInput;

        textSize(this.fontSize);
        const ascent = textAscent();
        const descent = textDescent();
        this.textHeight = ascent + descent;

        this.bar = loadImage("img/bar.png");
    }

    loadFromJSON(data) {
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

    newLine(total) {
        let offset = this.textHeight;
        if (total !== undefined) offset *= total;
        this.renderPosition.y += offset;
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
            this.lastText = str;
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
            this.renderText(indent, item, i + 1 + ". ");
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
        this.promptPosition.x += textWidth(this.lastText + " ");
        this.promptPosition.y -= this.fontSize;
    }

    // --- CHANGES WITH TYPE ---

    render() {
        this.renderStart();

        this.newLine();
        this.renderText(0, this.title);
        this.newLine();
        this.renderText(0, ["This slide uses", "no existing type: " + this.type]);
        this.newLine();

        this.updateCursor();
    }

    getAction(actionIndex) {
        return undefined;
    }

    changeText(changeData) {
        return undefined;
    }
}