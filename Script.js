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


//presley-JavaScript for contact page

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
      document.getElementById("msgFeedback").innerHTML = "This field is required"
      document.getElementById("msgFeedback").style.visibility = "visible";
      document.getElementById("msgFeedback").style.color="red";


  }
    if(formData[2] .length == "" ){
      document.getElementById("msgFeedback").innerHTML = "This field is required"
      document.getElementById("msgFeedback").style.visibility = "visible";
      document.getElementById("msgFeedback").style.color="red";


    if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "See More";
        status = "less"
    }
}

//presley: source - https://www.youtube.com/watch?v=ydZc17rlR5E&t=20s -Florin pop
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-ul');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });


//when you click the hamburger menu, event listener toggles the nav-ul to appear
hamburger.addEventListener('click', () => {
nav.classList.toggle('show');
});

/*this was the first dom manipulation i was going to use but i couldnt find a way to make the color change to something else, then i decided to take the light switch/ dark and light concept and implemented it into the JS code below that chnages the background cover and makes the button hidden and visible

//DOM MANIPULATION source: https://www.youtube.com/watch?v=jIyBx0Yh4rI
document.getElementById("appearance").onclick = changeBackgroundColorToGreen;
document.getElementById("appearance").onclick = changeBackgroundColorToYellow;

function changeBackgroundColorToGreen(){
document.querySelector("body").style.background = "green";
} */



function changeBackgroundColor(){
  //if the background color is not green and you click the moon icon, the background will change to green and hide the moon icon and make the sun icon visible
  if(body.style.background !== "green"){
    body.style.background = "green";
      document.getElementById("moon").style.visibility = "hidden";
      document.getElementById("sun").style.visibility = "visible";
      document.getElementById
  }
}

function changeBackgroundColor2(){
  //if the background color is not yellow and you click the sun icon then the background color will change to yellow and make the sun icon hidden and the moon icon visible - it acts like a light switch.
  if(body.style.background !== "yellow"){
    body.style.background = "yellow";
        document.getElementById("sun").style.visibility = "hidden";
        document.getElementById("moon").style.visibility = "visible";
  }























  // Solomon- Naruto.page//

var situation = "less";
var situation2 = "more";
function toggleText()
{
    var text="<li>The ranks in the naruto universe go from genin,chuunin,jounin and Kage.</li> <li>Each rank has an exam.</li> <li>To rank up one must complete the exam. The exams can be very cruel with some people even losing there life.</li></li><li>The rank of kage can only be obtained by doing numerous S-rank missions and get the approvely of the previous kage to set into office.</li><li>Each rank a ranked assigned misson they are allowed to do.</li><li>Genin can do D ranked missions.<li>Chuunin can do D-C ranked missions.</li><li>Jounin can do D-B and some can even do A rank missons.</li><li>A-rank and S-rank missions are normally carried by the Anbu or talented individuals.</li><li> Anbu are people who are part of a secret organisation in the village.</li><li> Each village has there own anbu for top secert missions.</li></ul>";

    if (situation == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "Expand ";
        situation2 = "more";
        document.getElementById("toggleButton").style.visibility = "hidden";
        document.getElementById("toggleButtonCollapse").style.visibility = "visible;"

    }
}



var situation = "less";
function toggleText2()
{
    var text="<li>The ranks in the naruto universe go from genin,chuunin,jounin and Kage.</li> <li>Each rank has an exam.</li> <li>To rank up one must complete the exam. The exams can be very cruel with some people even losing there life.</li></li><li>The rank of kage can only be obtained by doing numerous S-rank missions and get the approvely of the previous kage to set into office.</li><li>Each rank a ranked assigned misson they are allowed to do.</li> genin can do D-C</li><li>Genin can do D ranked missions.<li>Chuunin can do D-C ranked missions.</li><li>Jounin can do D-B and some can even do A rank missons.</li><li>A-rank and S-rank missions are normally carried by the Anbu or talented individuals.</li><li> Anbu are people who are part of a secret organisation in the village.</li><li> Each village has there own anbu for top secert missions.</li></ul>";

   if(document.getElementById("toggleButton") == "visible"){
     document.getElementByid("textarea").innterHTML = text;
      document.getElementById("textArea").innetext = "Collapse";
      situation = "less";
      document.getElementByiD("toggleButtonCollapse").style.visibility = "visible";
      document.getElementByiD("toggleButton").style.visibility = "hidden";
    }
}
