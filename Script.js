//function validate(){
  //get input from user save ot var
//  var input = document.getElementById("emailData").value;
  //check for @symbol
  // using indexof() - this will return a number of where the @ symbol is on the string
//  var symbol = input.indexOf('@');
  //get the index of the . and if >0 that means its present
  //if not there gve feedback
//  if(symbol < 1){
  //  document.getElementById("emailText").innerHTML = "Please enter a valid email address";
  //}else{
        //if it is there then capitalise the email & show user
      //  document.getElementById("errort").innerHTML = input.toUpperCase();
  //}

//}
// presley Youtube: Telesko email validation #31 tutorial
function validate(){
    var input = document.getElementById("emailData").value;
    var x = /^([a-z A-z 0-9\.-]+)@$/;
      if(x.test(input))
      {
        document.getElementById("errorText").innerHTML="Valid";
        document.getElementById("errorText").style.visibility = "visible";
        document.getElementById("errorText").style.color="green";
      }
      else{
        document.getElementById("errorText").innerHTML="Please enter a valid email address";
        document.getElementById("errorText").style.visibility = "visible";
        document.getElementById("errorText").style.color="red";
      }
}
