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

//next ill have the program ask for the amount of calls taken

var totalCalls; //variable for the total amount of calls taken

totalCalls = prompt("Total calls taken? ");
//asks the user the total amount of calls taken

alert("User: "+user+"\nCalls Taken "+totalCalls);
//calls the variable user and totalCalls and concatenates them in an alert with a string

console.log(totalCalls);//console showing the number stored in the variable totalCalls
//console output for the variable totalCalls
// next part is the program asking for the amount of tickets user has resolved

var totalTickets;//Declaring the variable totalTickets
totalTickets = prompt("How many tickets have you resolved? ");

alert(user+" : has taken "+totalCalls+" calls.\n"+user+" : has also resolved "+totalTickets+" tickets total."); //popup

console.log(totalTickets);//console shows total number of tickets stored in the variable totalTickets

// Now that I have all the information, I will have the program total the time and spent on each
// for the sake of this seeming like a database interaction im going to set the variables internally for the
// average call time and the average ticket time.

alert("Please wait while we retrieve your average times... \nAverage call time....done\nAverage ticket time....done");
//fun little prompt for filler

var averageTicketTime; //Declaring the variable averageTicketTime
var averageCallTime;  //Declaring the variable averageCallTime

averageTicketTime = 6; // variable for average ticket time
averageCallTime = 12;  // vaiable for average call time
//console to show that the stored variable is being stored and called correctly
console.log(".......AVERAGE TICKET TIME FOR USER: "+averageTicketTime+" Min "); // Output to console for variable in memory
console.log(".......AVERAGE CALL TIME FOR USER: "+averageCallTime+" Min "); // Output to console for average call time

var totalCallTime;
//Declaring the variable totalCallTime to store the number it gets when multiplying averageCallTime and totalCalls;
totalCallTime = averageCallTime*totalCalls;

var totalTicketTime;
//Declaring the variable totalCallTime to store the number it gets when multiplying averageTicketTime and totalTickets;
totalTicketTime  = averageTicketTime*totalTickets;

console.log("Total ticket time "+totalTicketTime);
console.log("Total call time "+totalCallTime);
alert("User: " + user + "\nAverage call time : " + averageCallTime + " Mins\nAverage ticket time : "
    + averageTicketTime + " Mins\n" + user + " : has spent " + totalCallTime + " min total on " + totalCalls + " calls.\n" + user+" : has spent "
    +totalTicketTime+" min total on "+totalTickets+" tickets.");

var totalCallHrs; // total amount of hours spent on the phone
var totalTicketHrs; // total amount of hours spent on the phone
var hour;
hour = 60;
totalCallHrs = totalCallTime / hour; //take totalTicketTime and divides it by 60 to get the amount of call time in hrs
totalTicketHrs =totalTicketTime / hour; //takes totalTicketTime and divides it by 60 to get the amount of ticket time in hrs
console.log(totalTicketHrs+" -Total hrs spent working on tickets");//console showing calculation for tickets
console.log(totalCallHrs+" -Total hrs spent working on calls");//console showing calculation calls
alert(user+" has spent "+totalCallHrs+" hrs on the phone taking calls and "+totalTicketHrs+" hrs working on tickets");


console.log(".....Closing.....");
