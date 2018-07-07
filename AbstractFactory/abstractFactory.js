// the product instances being created by the factory
function Employee(name) {
  this.name = name;

  this.say = function() {
    log.add("I am employee " + name);
  };
}

/*
a factory object that 'manufactures' new products
the create() method returns new products
*/
function EmployeeFactory() {
  this.create = function(name) {
    return new Employee(name);
  };
}

// the product instances being created by the factory
function Vendor(name) {
  this.name = name;

  this.say = function() {
    log.add("I am vendor " + name);
  };
}

/*
a factory object that 'manufactures' new products
the create() method returns new products
*/
function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name);
  };
}

// log helper
var log = (function() {
  var log = "";

  return {
    add: function(msg) {
      log += msg + "\n";
    },
    show: function() {
      alert(log);
      log = "";
    }
  };
})();

function run() {
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create("Joan DiSilva"));
  persons.push(employeeFactory.create("Tim O'Neill"));
  persons.push(vendorFactory.create("Gerald Watson"));
  persons.push(vendorFactory.create("Nicole McNight"));

  for (var i = 0, len = persons.length; i < len; i++) {
    persons[i].say();
  }

  log.show();
}
