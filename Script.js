
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

//presley-JavaScript fr contact page
function validate(){
  var formData = []; // array that holds data from the form fields
  // arrays count from 0 up
  formData[0] = document.getElementById("nameData").value;
  formData[1] = document.getElementById("emailData").value;
  formData[2] = document.getElementById("msgData").value;

  if(formData[0] .length == ""){
    document.getElementById("nameFeedback").innerHTML = "This field is required"
    document.getElementById("nameFeedback").style.visibility = "visible";
    document.getElementById("nameFeedback").style.color="red";
  }
    else if(formData[0] .length < 2){
      document.getElementById("nameFeedback").innerHTML = "Name Is Not Valid"
      document.getElementById("nameFeedback").style.visibility = "visible";
  }

  var symbol = formData[1].indexOf("@");

  if(symbol = 0){
    document.getElementById("errorText").innerHTML = "Please enter a valid email address";
    document.getElementById("errorText").style.visibility = "visible";
    document.getElementById("errorText").style.color="red";
  }
    else if(formData[1] .length == 2 || formData[1] .length == 1){
      document.getElementById("errorText").innerHTML = "Please enter a valid email address";
      document.getElementById("errorText").style.visibility = "visible";
      document.getElementById("errorText").style.color="red";
    }
      else if(formData[1] .length == "" ){
        document.getElementById("errorText").innerHTML = "This field is required";
        document.getElementById("errorText").style.visibility = "visible";
        document.getElementById("errorText").style.color="red";
      }

    else{
        //if it is there then capitalise the email & show user
          document.getElementById("emailFeedback").innerHTML = input.toUpperCase();
  }
    if(formData[2] .length == "" ){
      document.getElementById("msgFeedback").innerHTML = "This field is required"
      document.getElementById("msgFeedback").style.visibility = "visible";
      document.getElementById("msgFeedback").style.color="red";

  }

}

//presley: source - https://www.youtube.com/watch?v=ydZc17rlR5E&t=20s -Florin pop
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav-ul');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

