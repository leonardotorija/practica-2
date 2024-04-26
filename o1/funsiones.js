var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true;
	counter++;
	if(counter > 4){
		counter = 1;
	}
},5000);
window.addEventListener("load", function() {
	document.getElementById('black').addEventListener("click",function() {
		alert("Hola mancos");
	})
});
window.addEventListener("load", function() {
	document.getElementById('blak').addEventListener("click",function() {
		alert("Hola mancos");
	})
});
window.addEventListener("load", function() {
	document.getElementById('ey').addEventListener("click",function() {
		alert("Hola mancos");
	})
});
window.addEventListener("load", function() {
	document.getElementById('malo').addEventListener("click",function() {
		alert("Hola mancos");
	})
});