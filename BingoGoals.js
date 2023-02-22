//function editdetails() {}

function Button(value) {
	var hidden = document.getElementById(value).innerHTML;
	if (hidden == "Completed") {
        if (value == "btn1") {
            var btn1 = document.getElementById('btn1');
           btn1.innerHTML = "<p id='bt1' contenteditable='true'>Enter New Goal</p>";
        } else if (value == "btn2") {
          document.getElementById('btn2').innerHTML = "Enter New Goal";
            document.getElementById('btn2').contentEditable = "true";
        } else if (value == "btn3") {
          document.getElementById('btn3').innerHTML = "Enter New Goal";
        } else if (value == "btn4") {
          document.getElementById('btn4').innerHTML = "Enter New Goal";
        } else if (value == "btn5") {
          document.getElementById('btn5').innerHTML = "Enter New Goal";
        } else if (value == "btn6") {
          document.getElementById('btn6').innerHTML = "Enter New Goal";
        } else if (value == "btn7") {
          document.getElementById('btn7').innerHTML = "Enter New Goal";
        } else if (value == "btn8") {
          document.getElementById('btn8').innerHTML = "Enter New Goal";
        } else if (value == "btn9") {
          document.getElementById('btn9').innerHTML = "Enter New Goal";
        } else if (value == "btn10") {
          document.getElementById('btn10').innerHTML = "Enter New Goal";
        } else if (value == "btn11") {
          document.getElementById('btn11').innerHTML = "Enter New Goal";
        } else if (value == "btn12") {
          document.getElementById('btn12').innerHTML = "Enter New Goal";
        } else if (value == "btn13") {
          document.getElementById('btn13').innerHTML = "Enter New Goal";
        } else if (value == "btn14") {
          document.getElementById('btn14').innerHTML = "Enter New Goal";
        } else if (value == "btn15") {
          document.getElementById('btn15').innerHTML = "Enter New Goal";
        } else if (value == "btn16") {
          document.getElementById('btn16').innerHTML = "Enter New Goal";
        }
    }
        
    else {
        document.getElementById(value).innerHTML = "Completed";
        document.getElementById(value).style.color = "lightsalmon";
        document.getElementById(value).style.backgroundColor = "white";
        document.getElementById(value).style.fontFamily = "serif";
        }
     
}
function md() {
    document.getElementById('Modale').style.display = "none";
}

