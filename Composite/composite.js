
import EmployeeGroup from ('./employeeGroup');
import Bot from ('./bot.js');

let ellie= new Bot("ellie","developer",200)
let kevin= new Bot("kevin","developer",100)

let groupDevelopers = new EmployeeGroup( "Developers", [ellie,kevin] );
let groupTesters = new EmployeeGroup("Testers",[
  new Bot("Elsa", "tester", 200),
  new Bot("John", "tester", 100),
  new Bot("Sanjiti", "tester", 300)
]);
 let vendorBot = new Bot("David", "vendor",70); 

let Employees = new EmployeeGroup("All Employees",[groupDevelopers,groupTesters,vendorBot]); 
Employees.print();
