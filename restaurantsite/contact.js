
  function submitf() {
      alert("example");
  }
function validate() {
	var submitOK=true;
	var repeat=0;
  var contactName = document.getElementById("contact-name").value;
  if (isNaN(contactName)==false) {
	alert("Please Enter Your Name");
	submitOK = "false";
	repeat=1;
	}
  var contactEmail = document.getElementById("contact-email").value.indexOf("@");
  if (contactEmail == -1 && repeat==0) {
  alert("Not a valid e-mail!");
  submitOK = "false";
  repeat=1;
	}
  var contactPhone = document.getElementById("contact-phone").value;
  if (contactPhone.length < 10 && repeat==0) {
	alert("Please Enter A Valid Phone Number");
	submitOK = "false";
	}
  var contactAdditional = document.getElementById("contact-additional").value;
  if(submitOK==true){
	alert("Thank you " + contactName + "! We will get back to you shortly!");
  }
}
