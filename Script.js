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
