const CareTaker = require("./careTaker");

const caretaker = new CareTaker();

caretaker.setValue("First value");
caretaker.setValue("Second value");
caretaker.setValue("Third value");
console.log(caretaker.getValues());
// ['First value', 'Second value', 'Third value']

const originator = caretaker.save();
console.log(originator.content);
// ['First value', 'Second value', 'Third value']

caretaker.setValue("Some another value");
console.log(caretaker.getValues());
// ['First value', 'Second value', 'Third value', 'Some another value']

caretaker.restore(originator);
console.log(caretaker.getValues());
// ['First value', 'Second value', 'Third value']
