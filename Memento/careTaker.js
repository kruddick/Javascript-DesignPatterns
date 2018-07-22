const Originator = require("./originator");

class CareTaker {
  constructor() {
    this._content = [];
  }

  setValue(value) {
    this._content.push(value);
    return this._content;
  }

  getValues() {
    return this._content;
  }

  save() {
    return new Originator(this._content);
  }

  restore(originator) {
    this._content = originator.content;
  }
}

module.exports = CareTaker;
