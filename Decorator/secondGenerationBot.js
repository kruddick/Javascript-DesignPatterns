class SecondGenerationBot {
  constructor(baseBot) {
    this.name = "II Generation " + baseBot.name;
    this.role = baseBot.role;
    this.relaxTime = baseBot.relaxTime - 50;
  }
  print() {
    console.log("name:" + this.name + " relaxTime: " + this.relaxTime);
  }
}

module.exports = SecondGenerationBot;
