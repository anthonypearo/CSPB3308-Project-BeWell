const submitButton = document.getElementById("submitAnswer");

document.addEventListener('DOMContentLoaded', function () {
submitButton.addEventListener("click", function(){
	const email = document.getElementById("email");
	console.log(email.value);
	
	 if (!checkEmail(email.value)){
	 	alert("Please enter a valid email address");
		email.style.backgroundColor = "#faa2a2";
		
		}
	 
	const fname = document.getElementById("fname");
	console.log(fname.value);
	
	 if (!checkTextInput(fname.value)){
	 	alert("Please enter a valid first name");
		fname.style.backgroundColor = "#faa2a2";
		
		}
	});
});

function checkEmail(potentialEmail){
	var mailformat = /\S+@\S+\.\S+/;
	return(mailformat.test(potentialEmail))
}

function checkTextInput(potentialName){
	var nameFormat = /[A-Za-z]+[-.A-Za-z]*/;
	return(nameFormat.test(potentialName))
}

module.exports = checkEmail, checkTextInput
