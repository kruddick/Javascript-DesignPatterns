import Tester from "./tester";
import Developer from "./developer";

const botFactory = (name, role, relaxTime) => {
  if (role === "developer") {
    return new Developer(name, relaxTime);
  } else {
    return new Tester(name, relaxTime);
  }
};

module.exports = botFactory;
