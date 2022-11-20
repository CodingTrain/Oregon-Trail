class Input {
  constructor(x, y) {
    this.buffer = '';
    this.cursor = createVector(x, y);
  }

  addKey(key, keyCode) {
    if (keyCode == SHIFT) return;
    if (keyCode == ENTER) {
      console.log('enter');
      const result = this.buffer;
      this.clear();
      return result;
    } else {
      this.buffer += key;
    }
  }

  render() {
    fill(255);
    textFont('VT323');
    textAlign(LEFT);
    text(this.buffer + '█', this.cursor.x, this.cursor.y);
  }

  clear() {
    this.buffer = '';
  }
}
