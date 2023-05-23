function validate() {
	var name = document.getElementById("name").value;
	var pwd = document.getElementById("pwd").value;
	var email = document.getElementById("email").value;
	var favorite= document.getElementById("favorite").value;

	var genm = document.getElementById("genm").checked; 
 	var genf = document.getElementById("genf").checked;
 	var geno = document.getElementById("geno").checked;
 	
 	var errMsg = "";
 	var result = true;

 	if (name == "") { 
		errMsg += "Name cannot be empty.\n"; 
	}
	if (pwd == "") { 
		errMsg += "Password cannot be empty.\n"; 
	}
	if (pwd.length < 7) {
		errMsg += "Password must be at least 7-character long.\n";
	}
	if (email == "") { 
		errMsg += "Email cannot be empty.\n"; 
	}

	if ((genm == "")&&(genf == "")) { 
	  	errMsg += "A gender must be selected.\n"; 
	} 

	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

function init () {
	var regForm = document.getElementById("regform");

	/* assigns functions to corresponding events */
  regForm.onsubmit = validate;
}

window.onload = init;