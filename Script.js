//Sean
 function guessNum(){

    
     var randNum = Math.floor(Math.random() * 20); //Uses randomisation,Uses number only from 1-10,it only returns integer values of this range
    
     //This produces an output of the random number-Sean
    document.write(randNum+" " +"This is the number generated!");

    var userInput= prompt("Enter any number between 1-20");
    //User inputs number ("Enter any number between 1-30+randNum")//Sean
    
    if(userInput === randNum){                  //Sean 
        window.alert("Correct! you are right!");// this message will pop up if you guessed the number correctly

    }else if(userInput > randNum){                          //Sean
        window.alert(" You guessed it too low,you lose!");//This message pops up if you have guess it too low
    }
     else if (userInput < randNum){                         //Sean
        window.alert("You guessed it too high,you lose!");//if number us guessed too high this alert will pop up
    }
    else if(randNum >= 30){
        window.alert("You cannot enter anything above 20");
    }
    else if(randNum <= 1){                                  //Sean
        window.alert("You cannot enter anything below 1");//if number is not in the correct range of guessing
    }
    else{                                           //Sean
        window.alert("This is not valid,ERROR!"); //This message prints if the value is not an integer
    }
}

