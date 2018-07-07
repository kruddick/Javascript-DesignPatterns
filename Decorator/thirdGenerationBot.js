class ThirdGenerationBot {
  constructor(baseBot) {
    this.name = "III Generation " + baseBot.name;
    this.role = baseBot.role;
    this.relaxTime = baseBot.relaxTime - 100;
  }
  print() {
    console.log("name:" + this.name + " relaxTime: " + this.relaxTime);
  }
}

module.exports = ThirdGenerationBot;
