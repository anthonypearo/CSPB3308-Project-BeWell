const submitButton = document.getElementById("submitAnswer");

submitButton.addEventListener("click", function(){
	const email = document.getElementById("email");
	console.log(email.value);
	
	 if (!checkEmail(email.value)){
	 	alert("Please enter a valid address");
		email.style.backgroundColor = "#faa2a2";
		email.value = "";
		}
})

function checkEmail(potentialEmail){
	var mailformat = /\S+@\S+\.\S+/;
	return(mailformat.test(potentialEmail))
}
