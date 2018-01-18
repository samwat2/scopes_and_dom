/*
var firstNameInput= document.getElementById('first_name');
first_name.addEventListener('keyup', function(){
	document.getElementById('title').innerText = this.value;	
});
*/

var lbutton = document.getElementById('lbutton');
lbutton.addEventListener('click', function() {
	document.getElementById('box').innerText = "YOU SHOULD'VE CHOSE ME";
});

var rbutton = document.getElementById('rbutton');
rbutton.addEventListener('click', function(){
	document.getElementById('box').innerText = "NO, CLICK ON ME";
});