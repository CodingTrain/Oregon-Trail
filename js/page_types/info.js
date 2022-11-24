class Info extends Page {
  loadFromJSON(data) {
    super.loadFromJSON(data);

    this.prompt = data.prompt;
    this.action = data.action;
    this.text = data.text;
  }

  getAction(input) {
    if (input !== ' ') return;
    return {
      action: this.action,
    };
  }

  render() {
    this.renderStart();

    if (this.img) {
      this.renderImg(this.img);
      this.renderBar();
      this.newLine();
    } else {
      this.renderBar();
      this.newLine();
      this.renderText(0, this.title);
      this.newLine();
    }

    this.newLine();
    this.renderText(0, this.text);
    this.newLine();
    this.renderBar();
    this.newLine();
    this.renderText(3, this.prompt);

    this.updateCursor();
  }
}
