// Script.js 
function validate() { 
	let exampleInputName = 
		document.getElementById("exampleInputName").value; 
	let exampleInputEmail1 = 
		document.getElementById("exampleInputEmail1").value; 
	let exampleInputPesan = 
		document.getElementById("exampleInputPesan").value; 
	let error_message = 
		document.getElementById("error_message"); 

	error_message.style.padding = "10px"; 

	let errors = []; 

	if (exampleInputName.length < 5) { 
		errors.push("Please Enter a valid Name");} 
	if (exampleInputEmail.indexOf("@") == -1 || email.length < 6) { 
		errors.push( 
			"Please Enter a valid Email");} 
	if (exampleInputPesan.length <= 40) { 
		errors.push( 
			"Please Enter More Than 40 Characters");} 

	if (errors.length > 0) { 
		error_message.innerHTML = 
			errors.join("<br>"); 
		return false;} 
	else { 
		alert( 
			"Form Submitted Successfully!"); 
		return true;}}
