function other(code) {
  const codes = [CONTROL, SHIFT];
  return codes.includes(code);
}

class Input {
  constructor(x, y) {
    this.buffer = '';
    this.cursor = createVector(x, y);
  }

  addKey(key, keyCode) {
    if (other(keyCode)) return;
    if (keyCode == BACKSPACE) {
      this.buffer = this.buffer.substring(0, this.buffer.length - 1);
    } else if (keyCode == ENTER) {
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
