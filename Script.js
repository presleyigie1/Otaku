/*solomon*/
var status = "less";

function toggleText()
{
    var text="Lmao";

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
