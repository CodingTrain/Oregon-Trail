// Valid Keys
const all = 'abcdefghijklmnopqrstuvwxyz';
const valid = (all + all.toUpperCase() + ' 1234567890').split('');

function validate(key) {
  return valid.includes(key);
}

class Input {
  constructor(x, y) {
    this.buffer = '';
    this.cursor = createVector(x, y);
  }

  addKey(key, keyCode) {
    if (keyCode == BACKSPACE) {
      this.buffer = this.buffer.substring(0, this.buffer.length - 1);
    } else if (keyCode == ENTER) {
      console.log('enter');
      const result = this.buffer;
      this.clear();
      return result;
    } else if (validate(key)) {
      this.buffer += key;
    }
  }

  render() {
    fill(255);
    textAlign(LEFT);
    text(this.buffer + '█', this.cursor.x, this.cursor.y);
  }

  clear() {
    this.buffer = '';
  }
}
