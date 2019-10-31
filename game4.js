var noOfFaces=5;
var body_s = document.getElementById("body_s");

function game() {
	var face = "smile3.png";
	var left_side = document.getElementById("left_side");
	var right_side = document.getElementById("right_side");
	
	for(var i = 0; i < noOfFaces; i++) {
		
		var left = Math.floor((Math.random() * 400) + 1);
		var top = Math.floor((Math.random() * 400) + 1);
		var img_f = document.createElement("img");
		img_f.setAttribute("src", face);
		img_f.style.left = left + "px";
		img_f.style.top = top + "px";
		left_side.appendChild(img_f);
	
	}
	
	var clone = left_side.cloneNode(true);
	clone.removeChild(clone.lastChild);
	right_side.appendChild(clone);

	left_side.lastChild.onclick = function extra_face(event) {
		event.stopPropagation ();
		noOfFaces += 5;
		game();
	};
	
	body_s.onclick = function gameOver() {
		alert("Game Over");
		body_s.onclick = null;
		left_side.lastChild.onclick = null;
	};

}