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

}

//presley: source - https://www.youtube.com/watch?v=ydZc17rlR5E&t=20s -Florin pop
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-ul');

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
}
