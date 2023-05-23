var delivermode = 0;
var payonline = 0;

function showdelivery(val){
	deliveryaddressbox = document.getElementById("deliveryaddressbox");
	if (val == 1){
		deliveryaddressbox.style.display= "block";
		delivermode = 1;
	} else {
		deliveryaddressbox.style.display = "none";
		delivermode = 0;
	}
}

function showpay(val){
	creditinfo = document.getElementById("creditinfo");
	if (val == 1){
		creditinfo.style.display = "block";
		payonline = 1;
	} else {
		creditinfo.style.display = "none";
		payonline = 0;
	}
}

function copy(val){
	var deliveryaddress = document.getElementById("deliveryaddress").value;
	var billingaddress = document.getElementById("billingaddress").value;
	if(val == 1) {
		billingaddress = deliveryaddress;
	}
}

function validate() {
	var delivery = document.getElementById("delivery").checked; 
	var pickup = document.getElementById("pickup").checked; 

	var deliveryaddress = document.getElementById("deliveryaddress").value;
	var postcode = document.getElementById("postcode").value;
	var billingaddress = document.getElementById("billingaddress").value;
	var contactnumber = document.getElementById("contactnumber").value;
	var emailreceipt = document.getElementById("emailreceipt").value;

	var online = document.getElementById("online").checked; 
	var pickuppay = document.getElementById("pickuppay").checked; 

	var cardtype = document.getElementById("cardtype").value;
	var creditnumber = document.getElementById("creditnumber").value;

	var errMsg = "";
 	var result = true;

 	if ((delivery == "")&&(pickup == "")) { 
	  	errMsg += "A delivery mode must be selected.\n"; 
	} 

 	if (delivermode == 1) {
 		if (deliveryaddress == "") { 
			errMsg += "Delivery address cannot be empty.\n"; 
		}
		if (postcode == "") {
			errMsg += "Postcode cannot be empty.\n";
		} else if (postcode.length != 4) {
			errMsg += "Postcode is 4 digits only.\n"
		}
 	}

 	if (billingaddress == "") { 
		errMsg += "Billing address cannot be empty.\n"; 
	}
	if (contactnumber == "") { 
		errMsg += "Contact number cannot be empty.\n"; 
	}
	if (emailreceipt == "") { 
		errMsg += "Email receipt cannot be empty.\n"; 
	}

	if ((online == "")&&(pickuppay == "")) { 
	  	errMsg += "A paying method must be selected.\n"; 
	}

	if (payonline == 1){ 
		if (creditnumber == ""){
			errMsg += "Credit card information cannot be empty.\n"; 
		} else {
			if (cardtype == "visa"){
				if (creditnumber.length != 16){
					errMsg += "Visa card has 16 digits.\n";
				}
			}
			if (cardtype == "mastercard"){
				if (creditnumber.length != 16){
					errMsg += "MasterCard has 16 digits.\n";
				}
			}
			if (cardtype == "americanexpress"){
				if (creditnumber.length != 15){
					errMsg += "American Express has 15 digits.\n";
				}
			}
		}
	}

	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

function init () {
	var orderForm = document.getElementById("orderform");
  	orderForm.onsubmit = validate;
}

window.onload = init;