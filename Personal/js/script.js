//This will be a program using arrays to calculate a budget and show how much money is// left of a check at the end of each weekvar budgetArray = Array();var note = "     note: please only use numbers.";//var itNote = note.italics();budgetArray [0] = new Array();//creating the data type as the main arraybudgetArray [0] [0] = prompt("How many times do you get paid during the month?\n" + note);// times paid//prompting user to input how many times paid during the month and storing it in the [] indexconsole.log(budgetArray[0] [0] + " : Amount of times paid");//displaying data stored in [0] [0]budgetArray [0] [1] = prompt("What is your average check amount?\n    in dollars."); //per check amountconsole.log("$"+budgetArray [0] [1] + " : Average Check Amount"); //prints to the console the check amountbudgetArray [0] [2] = prompt("What are your bills combined monthy ?"); //combined billsconsole.log("$"+budgetArray [0] [2] +" : Bills Combined"); // prints the data stored in thebudgetArray [1] = new Array();budgetArray [1] [0] = budgetArray [0] [0] * budgetArray [0] [1]; //total monthly incomebudgetArray [1] [1] = budgetArray [1] [0] - budgetArray [0] [2]; //net after billsbudgetArray [1] [2] = budgetArray [1] [1] / budgetArray [0] [0]; //amount left from each check after billsconsole.log("Total monthly income: $"+budgetArray[1] [0]);//prints data stored in that spot in the arrayconsole.log("Total monthly bills: $"+budgetArray[0] [2]);//same//alert("Total monthly income: $" + budgetArray[1] [0]); //popup showing total monthly income stored at [1] [0]alert("Total monthly debt: $" + budgetArray[0] [2]); //popup showing total montly income stored at [0] [2]alert("when we subtract the two we get: $" + budgetArray [1] [1]); //popup showing net amount left over at [1] [1]alert("The amount left over from each check is: $"+ budgetArray [1] [2]); //popup showing the result of action// performed at [1] [2]