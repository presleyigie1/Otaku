//Sean
 function guessNum(){

     var randNum = Math.floor(Math.random() * 30); //Uses randomisation,Uses number only from 1-10,it only returns integer values of this range
    
     //This produces an output of the random number
    print(randNum);

    var userInput= prompt("Enter any number between 1-30");
    //User inputs number ("Enter any number between 1-30+randNum")
    
    if(userInput < randNum){
        window.alert("Correct! you are right!");// this message will pop up if you guessed the number correctly

    }else if(userInput > randNum){
        window.alert(" You guessed it too low,you lose!");//This message pops up if you have guess it toow
    }
     else if (userInput == randNum){
        window.alert("You guessed it too high,you lose!");
    }
    else{
        window.alert("This is not valid,ERROR!"); //This message prints if the value is not an integer
    }
}
