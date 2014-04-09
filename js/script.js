//Calculator for how many tickets and calls i did today
//for complexity ill have it ask me my average time per ticket
//and the average time per call
//it will then do some basic math to determine
//how much time i spent doing each

var userName;
//username is the variable for the name of the person entering in the information

userName = prompt("User Name: ");
alert("Hello "+userName);
//displays the output in the console
console.log(userName);

//next ill have the program ask for the amount of calls i took

var totalCalls; //variable for the total amount of calls taken

totalCalls = prompt("Total calls taken? ");
//asks the user the total amount of calls taken
alert("User: "+userName+" Calls Taken "+totalCalls);

console.log(totalCalls);

var totalTickets;
totalTickets = prompt("How many tickets have you resolved? ");

alert(userName+" has taken "+totalCalls+" calls & "+"has resolved "+totalTickets+" tickets total.");

console.log(totalTickets);


