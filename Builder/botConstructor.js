import BotBuilder from ("./BotBuilder");

//developers
const Elsa = new BotBuilder('Elsa').makeDeveloper().setRelaxTime(100).makeItSing().build();
const Steven = new BotBuilder('Steven').makeDeveloper().setRelaxTime(200).build();

//testers
const Maddie = new BotBuilder('Maddie').makeTester().setRelaxTime(200).makeItSing().build();
const Sanjiti = new BotBuilder('Sanjiti').makeTester().setRelaxTime(400).build();

//Manager
const Caroline = new BotBuilder('Caroline').makeManager().setRelaxtime(50).build();

//DevOps
const Jim = new BotBuilder('Caroline').makeDevOps().setRelaxtime(110).build();