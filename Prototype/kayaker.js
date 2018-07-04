class Kayaker {
  constructor(name = "Give me a name") {
    this.name = name;
    this.strokes = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addStroke(stroke) {
    this.strokes.push(stroke);
  }

  clone() {
    let proto = Object.getPrototypeOf(this);
    let cloned = Object.create(proto);

    cloned.strokes = [...this.strokes];
    cloned.name = this.name;
    return cloned;
  }
}

export default Kayaker;
