function errorcheck(sbetin) {    //Function to check for correct inputs
    if (sbetin == "" || isNaN(sbetin)) { //Check for input existence
        alert("Starting Bet must be filled in with a number.");
        return false;
    }
	  if (sbetin <=0) { //Check for input greater than 0
        alert("Starting Bet must be greater than $0");
        return false;
    }
	else
		return true;
} 



function game() {
 
    var sbetin = document.forms["sevGame"]["sbetin"].value; //Get input variable
	   if(!errorcheck(sbetin)){
		   return false; //quit if errorcheck is false
	   }
	var count=0; //Variable to store number of rolls
	var wins = new Array(); //Array to store all the winnings per round
	var max = 0; //Variable to store max amount of winnings at one point
    for (var gamemoney = sbetin; gamemoney > 0; count++) { //Roll until out of money
		dOne = Math.ceil(Math.random() * (1 + 6 - 1));		
		dTwo = Math.ceil(Math.random() * (1 + 6 - 1)); //Rolling two die
		if (dOne+dTwo==7) { //Check if won
			gamemoney += 4;
		}
		else { //Lost
			gamemoney -= 1;
		}
		wins[wins.length] = gamemoney; //Store amount of money left
    }    
	
	
	for (var i = 0; i < wins.length; i++) { //Run through the array
		if (wins[i] > max) { //Get max value 
			max = wins[i];
		}
	}
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again";
   document.getElementById("sbet").innerText = ("$" +sbetin+".00"); //Starting Bet
   document.getElementById("rolls").innerText = count; 				//Number of Rollls before losing
   document.getElementById("max").innerText = ("$" + max+".00");	//Max winnings at any one time
   document.getElementById("index").innerText = wins.indexOf(max);	//Roll count when had the most money

   return false;
}