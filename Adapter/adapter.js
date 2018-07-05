// old interface
function OldKayakRentals() {
  this.request = function(name, time) {
    // rental calculation
    return 10;
  };
}

// new rental interface
function NewKayakRentals() {
  this.name = function(name) {
    /* set name of renter */
  };
  this.age = function(age) {
    /* set the age */
  };
  this.setTime = function(time) {
    /* set Time */
  };
  this.insurance = function() {
    /* calculate insurance */
  };
  this.calculate = function() {
    // rental calculation
    return 45;
  };
}

//adapter interface
function RentalsAdapter(age) {
  let rental = new KayakRental();
  rental.age(age);
  rental.insuarnce();
  return {
    request: function(name, time) {
      rentals.name(name);
      rentals.setTime(time);
      return rentals.calculate();
    }
  };
}

//while using
//old
const Rentals = new OldKayakRentals();
let price = Rentals.request(name, time);
//new
const adapter = new rentalsAdapter(age);
let price = adapter.request(name, time);
