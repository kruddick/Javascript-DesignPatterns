import Bot from ('./bot.js');
import SecondGenerationBot from ('./secondGenerationBot');
import ThirdGenerationBot from ('./thirdGenerationBot');

let alex = new Bot("Alex", "developer", 300);
let alex2 = new SecondGenerationBot(alex);

let alex3 = new ThirdGenerationBot(alex); 

alex2.print()
alex3.print()
