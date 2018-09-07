function checkPalindromes(str){
	
	var newStr = str.replace(/[' .,?!;-]/g, "");
	var char = [];

	for(var x = newStr.length-1; x >= 0; x--){

		char.push(newStr[x].toLowerCase());

	}

	if(newStr.toLowerCase() === char.join("")){
		return true;
	}
	else{
		return false;
	}
}

checkPalindromes("Don't nod.");
checkPalindromes("I did, did I?");
checkPalindromes("My gym");
checkPalindromes("Red rum, sir, is murder");
checkPalindromes("Step on no pets");

