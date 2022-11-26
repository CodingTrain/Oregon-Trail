class Choice extends Page {
  loadData(data) {
    super.loadData(data);

    const img = data.img;
    if (img.length != 0) this.img = loadImage(img);

    this.loadImportantVariable(data, 'prompt');
    this.loadImportantVariable(data, 'choices');
  }

  getAction(input) {
    const index = input - 1;

    const choice = this.choices[index];
    if (choice === undefined) return undefined;

    return {
      action: choice.action,
      actionIndex: index,
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
    this.renderText(0, 'You may:');
    this.newLine();
    this.renderListText(1, this.choices);
    this.newLine();
    this.renderText(0, this.prompt);

    this.updateCursor();

    this.newLine();
    this.renderBar();
  }

  changeText(changeData) {
    const choice = this.choices[changeData.index];
    if (choice === undefined) return;
    choice.text = changeData.text;
  }

  changeChoice(choiceIndex, newText) {
    const choice = this.choices[choiceIndex];
    if (choice === undefined) return;
    choice.text = newText;
  }
}
