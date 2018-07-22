class Magazine {
  constructor({ title, type }) {
    this.title = title;
    this.type = type;
    console.log(`New magazine successfully created: ${title}`);
  }

  getTitle() {
    return this.title;
  }
}

class Airport {
  constructor({ name }) {
    this.name = name;
    console.log(`New airport successfully created: ${name}`);
  }

  onMagazinePublished(magazine) {
    console.log(`Hi ${this.name}! 
    There are some news for you: ${magazine.getTitle()}`);
  }
}

class Publisher {
  constructor() {
    this.subscribers = {};
    console.log(`New publisher successfully created.`);
  }

  notify(type, magazine) {
    this.subscribers[type].forEach(subscriber =>
      subscriber.onMagazinePublished(magazine)
    );
  }

  attach(subscriber, type) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(subscriber);
    console.log(
      `${subscriber.name} successfully added to subscription: ${type}`
    );
    return this;
  }

  addNewMagazine(magazine) {
    console.log(
      `I'm going to notify all subscribers by type ${magazine.type}...`
    );
    this.notify(magazine.type, magazine);
  }
}

const publisher = new Publisher();

const dali = new Airport({ name: "Dali International Airport" });
const charlesDeGaulle = new Airport({
  name: "Charles De Gaulle International Airport"
});
const boryspil = new Airport({ name: "Boryspil International Airport" });

publisher
  .attach(dali, "Airports daily")
  .attach(charlesDeGaulle, "Airports daily")
  .attach(boryspil, "Airports daily");

publisher.addNewMagazine(
  new Magazine({ title: "Fresh news for today", type: "Airports daily" })
);
