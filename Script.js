function validEmail(){
  //get input from user save ot var
  var input = document.getElementById("emailData").value;
  //check for @symbol
  // using indexof() - this will return a number of where the @ symbol is on the string
  var symbol = input.indexOf('@');
  //get the index of the . and if >0 that means its present
  //if not there gve feedback
  if(symbol < 1){
    document.getElementById("emailError").innerHTML = "Please enter a valid email address";
  }else{
        //if it is there then capitalise the email & show user
        document.getElementById("emailError"). innerHTML = input.toUpperCase();
  }

}
