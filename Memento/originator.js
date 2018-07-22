class Originator {
  constructor(content) {
    this._content = content;
  }
  get content() {
    return this._content;
  }
}

module.exports = Originator;
