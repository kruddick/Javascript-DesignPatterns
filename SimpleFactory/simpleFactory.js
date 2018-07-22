class Box {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    this.isOpened = false;
  }

  openBox = () => {
    this.isOpened = true;
    console.log(`Box is ${this.isOpened ? "opened" : "closed"}`);
  };

  closeBox = () => {
    this.isOpened = false;
    console.log(`Box is ${this.isOpened ? "opened" : "closed"}`);
  };
}

class Tape {
  constructor(length = 10) {
    this.length = length;
    this.isUsed = false;
  }

  glue = () => {
    this.isUsed = true;
  };
}

class DoorFactory {
  static makeBox(params = { width: 10, height: 10 }) {
    console.log(
      `Creating box with size: width=${params.width}, height=${params.height}`
    );
    return new Box(params);
  }

  static getTape(length) {
    console.log(`Preparing tape with length: ${length}`);
    return new Tape(10);
  }
}

const sizes = [10, 20, 30, 40, 50];
const { makeBox, getTape } = DoorFactory;

const giftBoxesBySize = new Map(
  sizes.map(size => [size, makeBox({ width: size, height: size })])
);
const typesForBoxes = new Map(sizes.map(size => [size, getTape(size)]));

console.log(giftBoxesBySize.values());
console.log(typesForBoxes.values());
