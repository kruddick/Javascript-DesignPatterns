class BotBuilder {
  constructor(name) {
    this.name = name;
  }

  makeManager() {
    this.role = "manager";
    return this;
  }
  makeDeveloper() {
    this.role = "developer";
    return this;
  }
  makeTester() {
    this.role = "tester";
    return this;
  }

  makeDevOps() {
    this.role = "devops";
    return this;
  }

  setRelaxTime(time = 100) {
    this.relaxTime = time;
    return this;
  }

  makeItSing() {
    this.canSing = true;
    return this;
  }

  build() {
    return new Bot(this);
  }
}

module.exports = BotBuilder;
