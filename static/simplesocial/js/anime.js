// caps lock key
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("caps-lock").addEventListener("click", function(){
		let l = this.childNodes[0].classList;
		l.contains("on") ? l.remove("on") : l.add("on");
	});
});


function keybin(key) {
	key = document.querySelector('#key');
	var board = document.querySelector('#board');
	board.style.opacity = 1;
	key.style.opacity = 0;
	$('#key').removeClass("hide");
	$('#board').addClass("hide");
	setTimeout(function(){
		board.style.opacity = 0;
		key.style.opacity = 1;
  },100);
}

function keybout(key) {
	key = document.querySelector('#key');
	key.style.opacity = 0;
	var board = document.querySelector('#board');
	board.style.opacity = 0;
	$('#board').removeClass("hide");
	key = $('#key').addClass("hide");
	setTimeout(function(){
		board.style.opacity = 1;
	},100);
}
