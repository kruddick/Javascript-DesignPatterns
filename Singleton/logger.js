class Logger {
  constructor() {
    this.logs = [];
  }

  getTotalMessages() {
    return this.logs.length;
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }
}

export default Logger;
