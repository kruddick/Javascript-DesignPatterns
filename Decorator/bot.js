class Bot {
  constructor(name, role, relaxTime) {
    this.name = name;
    this.role = role;
    this.relaxTime = relaxTime;
  }
  print() {
    console.log("name:" + this.name + " relaxTime: " + this.relaxTime);
  }
}

module.exports = Bot;
