/*pres*/
function validate(){
  //get input from user save ot var
  var inputForEmail = document.getElementById("emailData").value;
  //check for @symbol
  // using indexof() - this will return a number of where the @ symbol is on the string
  var symbol = inputForEmail.indexOf('@');
  //get the index of the . and if >0 that means its present
  //if not there gve feedback
  // presley Youtube: Telesko email validation #31 tutorial for style and visibility
  if(symbol < 1){
    document.getElementById("errorText").innerHTML = "Please enter a valid email address";
    document.getElementById("errorText").style.visibility = "visible";
    document.getElementById("errorText").style.color="red";
  }else{
        //if it is there then capitalise the email & show user

        document.getElementById("errorText").innerHTML = "Valid";
        document.getElementById("errorText").style.visibility = "visible";
        document.getElementById("errorText").style.color="green";
  }

}

/*solomon*/
var status = "less";

function toggleText()
{
    var text="Here is some text that I want added to the HTML file";

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
