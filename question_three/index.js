
document.addEventListener('keypress', function(k){
	// make a variable that holds the h1 element
	var text = (String.fromCharCode(k.keyCode));
	document.getElementById('textbox').innerText = text
});


