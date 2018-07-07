class EmployeeGroup {
  constructor(name, composite = []) {
    console.log(name);
    this.name = name;
    this.composites = composite;
  }
  print() {
    console.log(this.name);
    this.composites.forEach(bot => {
      bot.print();
    });
  }
}

module.exports = EmployeeGroup;
