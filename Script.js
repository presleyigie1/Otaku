
//Sean
 function guessNum(){


     var randNum = Math.floor(Math.random() * 20); //Uses randomisation,Uses number only from 1-10,it only returns integer values of this range

     //This produces an output of the random number-Sean
    document.write(randNum+" " +"This is the number generated!");

    var userInput= prompt("Enter any number between 1-20");
    //User inputs number ("Enter any number between 1-20+randNum")//Sean

    if(userInput === randNum){                  //Sean
        window.alert("Correct! you are right!");// this message will pop up if you guessed the number correctly

    }else if(userInput > randNum){                          //Sean
        window.alert(" You guessed it too low,you lose!");//This message pops up if you have guess it too low
    }
     else if (userInput < randNum){                         //Sean
        window.alert("You guessed it too high,you lose!");//if number us guessed too high this alert will pop up
    }
    else if( 20>= randNum){
        window.alert("You cannot enter anything above 20");
    }
    else if( 1<= randNum){                                  //Sean
        window.alert("You cannot enter anything below 1");//if number is not in the correct range of guessing
    }
    else{                                           //Sean
        window.alert("This is not valid,ERROR!"); //This message prints if the value is not an integer
    }
}




//presley-JavaScript for contact page
// i found the visibilty and style options on this link https://www.youtube.com/watch?v=vPVx-zGFh0w&t=109s
//

function validate(){
  var formData = []; // array that holds data from the form fields
  // arrays count from 0 up
  formData[0] = document.getElementById("nameData").value;
  formData[1] = document.getElementById("emailData").value;
  formData[2] = document.getElementById("msgData").value;

  if(formData[0] .length == ""){
    document.getElementById("nameFeedback").innerHTML = "This field is required";
    document.getElementById("nameFeedback").style.visibility = "visible";
    document.getElementById("nameFeedback").style.color="red";
  }
    else if(formData[0] .length < 2){
      document.getElementById("nameFeedback").innerHTML = "Name Is Not Valid";
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
        //displays "this field s required"
        document.getElementById("errorText").innerHTML = "This field is required";
        //makes the errorText Visible
        document.getElementById("errorText").style.visibility = "visible";
        document.getElementById("errorText").style.color="red";
      }

    else{
        //if it is there then capitalise the email & show user
          document.getElementById("emailFeedback").innerHTML = input.toUpperCase();
  }
    if(formData[2] .length == "" ){
      document.getElementById("msgFeedback").innerHTML = "This field is required";
      document.getElementById("msgFeedback").style.visibility = "visible";
      document.getElementById("msgFeedback").style.color="red";
  }
    if(formData[2] .length == "" ){
      document.getElementById("msgFeedback").innerHTML = "This field is required";
      document.getElementById("msgFeedback").style.visibility = "visible";
      document.getElementById("msgFeedback").style.color="red";
    }
}

//presley: source - https://www.youtube.com/watch?v=ydZc17rlR5E&t=20s -Florin pop
//hamburger menu javascript
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-ul');

//when you click the hamburger menu, event listener toggles the nav-ul to appear
hamburger.addEventListener('click', () => {
nav.classList.toggle('show');
});

/*this was the first dom manipulation i was going to use but i couldnt find a way to make the color change to something else, then i decided to take the light switch/ dark and light concept and implemented it into the JS code below that chnages the background cover and makes the button hidden and visible

//DOM MANIPULATION source: https://www.youtube.com/watch?v=jIyBx0Yh4rI

INITIAL CODE BELOW :

document.getElementById("appearance").onclick = changeBackgroundColorToGreen;
document.getElementById("appearance").onclick = changeBackgroundColorToYellow;

function changeBackgroundColorToGreen(){
document.querySelector("body").style.background = "green";
} */


// DOM MANIPULATION - USING A BACKHGROUND COLOUR SWITCHER - I essentially applied the same concept as the contact page form I created and chaged it to suite this situation
function changeBackgroundColor(){
  //if the background color is not green and you click the moon icon, the background will change to green and hide the moon icon and make the sun icon visible
  if(body.style.background !== "green"){
    body.style.background = "green";
      document.getElementById("moon").style.visibility = "hidden";
      document.getElementById("sun").style.visibility = "visible";
  }
}

function changeBackgroundColor2(){
  //if the background color is not yellow and you click the sun icon then the background color will change to yellow and make the sun icon hidden and the moon icon visible - it acts like a light switch
  if(body.style.background !== "yellow"){
    body.style.background = "yellow";
        document.getElementById("sun").style.visibility = "hidden";
        document.getElementById("moon").style.visibility = "visible";
  }
}
