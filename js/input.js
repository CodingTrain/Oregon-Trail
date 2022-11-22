// Valid Keys
const all = 'abcdefghijklmnopqrstuvwxyz';
const valid = (all + all.toUpperCase() + ' 1234567890').split('');

function validate(key) {
  return valid.includes(key);
}

class Input {
  constructor(x, y) {
    this.buffer = '';
    this.blink = false;
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

  render(slide) {
    fill(255);
    textAlign(LEFT);
    // Very silly way to blink the cursor
    if (this.blink && frameCount % 60 == 0) this.blink = false;
    else if (!this.blink && frameCount % 20 == 0) this.blink = true;
    if (this.blink)
      text(this.buffer + '█', slide.promptPosition.x, slide.promptPosition.y);
  }

  clear() {
    this.buffer = '';
  }
}
