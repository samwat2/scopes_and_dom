var hover = document.getElementById('hover');
hover.addEventListener('mouseover', function(){
	this.innerText = "I SAID DON'T HOVER OVER ME!";
});
hover.addEventListener('mouseout', function(){
	this.innerText= "DON'T HOVER OVER ME!";
});