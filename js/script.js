//Calculator for how many tickets and calls i did today
//for complexity ill have it ask me my average time per ticket
//and the average time per call
//it will then do some basic math to determine
//how much time i spent doing each

var user;
//user is the variable for the name of the person entering in the information
user = prompt("User Name: "); //prompts user for name passes that variable into memory
alert("Hello : "+user);//popup
//displays the output in the console
console.log(user);

//next ill have the program ask for the amount of calls i took

var totalCalls; //variable for the total amount of calls taken

totalCalls = prompt("Total calls taken? ");
//asks the user the total amount of calls taken
alert("User: "+user+"\nCalls Taken "+totalCalls);

console.log(totalCalls);

// next part is the program asking for the amount of tickets i have resolve

var totalTickets;
totalTickets = prompt("How many tickets have you resolved? ");

alert(user+" : has taken "+totalCalls+" calls.\n"+user+" : has also resolved "+totalTickets+" tickets total."); //popup

console.log(totalTickets);

// Now that i have all the information I will have the program total the time and spent on each
// for the sake of this seeming like a database interaction im going to set the variables internally for the
// average call time and the average ticket time.

var averageTickettime;
var averageCalltime;

averageTickettime = 6;
averageCalltime = 20;

console.log(".......AVERAGE TICKET TIME FOR USER: "+averageTickettime+" Min "); // Output to console for variable in memory
console.log(".......AVERAGE CALL TIME FOR USER: "+averageCalltime+" Min ");

var totalCalltime;
totalCalltime = averageCalltime*totalCalls;

var totalTickettime;  //  total time spent all day on tickets
totalTickettime  = averageTickettime*totalTickets;


alert("User: "+user+"\nAverage Call time : "+averageCalltime+" Min"+"\nAverage ticket time : "
    +averageTickettime+"\n"+user+" : has spent "+totalCalltime+" min total on "+totalCalls+" calls."+"\n"+user+" : has spent "
    +totalTickettime+" min total on "+totalTickets+" tickets.");

console.log(".....Closing.....");
