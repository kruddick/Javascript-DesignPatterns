import Logger from "./logger";

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Logger();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

//while using
//const Logger=require('./Logger');
//let logger= new Logger().getInstance();
