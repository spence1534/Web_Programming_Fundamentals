// Your pool in Gallons of puddingvar gallonsOfPudding;//declaring variable gallonsOfPuddingvar cubicFeet;//declaring variable cubicFeetvar width;//declaring variable widthvar depth;//declaring variable depthvar length;//declaring variable lengthvar flavor;//declaring variable flavorvar gallons;//declaring variable gallonswidth = 0;//initialize width variable with initial value of zerolength = 0;//initialize length variable with initial value of zerodepth = 0;//initialize depth variable with initial value of zerocubicFeet = width * depth * length;//initialize cubicFeet variable to get volume by doing (w)*(d)*(l)gallons = 7.48052; //setting a constant for gallons in cubic feetgallonsOfPudding = cubicFeet * ;//initialize gallonsOfPudding variable with value equaling the product of cubicFeet times the constant for cubic feet to gallonsflavor = "";//initial value of an empty stringalert("This Calculator will determine how many\ngallons of pudding you need to fill your pool");//alert describing what the program is going to doflavor = prompt("What Flavor of pudding is your favorite");//asks user their favorite flavor of puddingwidth = prompt("In feet how wide is your pool?");//stores number to width variableconsole.log(width + " ft - width"); //the output for the variable widthdepth = prompt("In feet how deep is your pool?");// stores number to length variableconsole.log(depth + " ft - depth"); //prints data stored in depth variablelength = prompt("In feet how long is your pool");//stores number in variable in lengthconsole.log(length + " ft - length");//prints data stored in variable in lengthalert("Your pool's volume is " + cubicFeet + "cubic ft");//alert showing the total volume in cupic feetconsole.log(cubicFeet + "- Volume of pool in cubic feet");//prints the volume of the poolalert("Now we will get convert to gallons");//stating next stepalert("When we take the cubic feet: " + cubicFeet + " and * by " + gallons + ", we get the total amount of gallons your pool holds");//alert showing the conversion form cubic feet to gallonsalert("Enjoy swimming in your " + flavor + "pudding"); //final message showing your flavor