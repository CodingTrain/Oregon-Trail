class Info extends Page {
  loadData(data) {
    super.loadData(data);

    this.loadImportantVariable(data, 'prompt');
    this.loadImportantVariable(data, 'action');
    this.loadImportantVariable(data, 'text');
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
      this.renderTopBar();
      this.newLine();
    } else {
      this.renderTopBar();
      this.newLine();
      this.renderText(0, this.title);
      this.newLine();
    }

    this.newLine();
    this.renderText(0, this.text);
    this.newLine();
    this.renderBottomBar();
    this.newLine();
    this.renderText(3, this.prompt);

    this.updateCursor();
  }
}
